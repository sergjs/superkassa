import './App.css';
import NumberPhone from './Components/NumberPhone/NumberPhone';
import { connect, Provider } from 'react-redux';
import store, { postNumber } from './redux/redux-store';
import React from 'react';


class App extends React.Component {

  componentDidUpdate(prevProps, nextProps) {
    if(prevProps !== this.props){
     console.log(nextProps);
    
   }
  }

  render() {
    return (<NumberPhone numbers={this.props.numbers} postNumber={this.props.postNumber} 
      isAuth={this.props.isAuth}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numbers: state.app.numbers,
    isAuth: state.app.isAuth
  }
};

const AppBox = connect(mapStateToProps, { postNumber })(App);

const AppContainer = (props) => {
  return <Provider store={store}>
    <AppBox />
  </Provider>

}
export default AppContainer;
