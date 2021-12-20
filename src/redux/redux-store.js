import { getNumber, postNumberAPI } from '../API/api';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let initialState = {
    numbers: [],
    isAuth: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NUMBERS': {
            return { ...state, numbers: action.numbers };
        };

        default:
            return state;
    };
};

export const NumberAC = (numbers) => ({ type: 'NUMBERS', numbers });

export const postNumber = (number) => async (dispatch) => {
    initialState.isAuth = true;
    let response = await postNumberAPI(number);
    if (response.statusText === "OK") {
        let numbers = await getNumber();
        initialState.isAuth = false;
        dispatch(NumberAC(numbers));
    }
};

let reducers = combineReducers({
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;