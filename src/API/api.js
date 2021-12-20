import * as axios from "axios";

export const getNumber = async () => {
    try {
       const respone = await axios.get(`https://safe-brushlands-71678.herokuapp.com/api/posts`)  
        return respone.data;
       } catch (e) {
           console.log(e)
       }
}
export const postNumberAPI = (number) => {
  return  axios.post(`https://safe-brushlands-71678.herokuapp.com/api/posts`, {number})  
}