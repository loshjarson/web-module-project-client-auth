import axios from 'axios';

export const START_LOGIN = 'START_LOGIN';
export const SUCCESFUL_LOGIN = 'SUCCESFUL_LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';
export const ADD_ERROR = 'ADD_ERROR';
export const ADDING_FRIEND = 'ADDING_FRIEND';



export const fetchSmurfs = () => dispatch => {
    dispatch({type:START_LOGIN})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({ type: SUCCESFUL_LOGIN, payload: res.data })
    )
    .catch(err => dispatch({ type: FAILED_LOGIN, payload: err }));
}


export function addFriend(newFriend) {
    return {type:ADDING_FRIEND, payload: newFriend}
}
export function setError(error) {
    return {type:ADD_ERROR, payload: error}
}