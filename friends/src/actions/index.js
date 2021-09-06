import { axiosWithAuth } from "../axiosAuth";

export const START_FETCH = 'START_FETCH';
export const SUCCESFUL_FETCH = 'SUCCESFUL_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchFriends = () => dispatch => {
    dispatch({type:START_FETCH})
    axiosWithAuth().get('http://localhost:5000/api/friends')
          .then(res => {
            dispatch({ type: SUCCESFUL_FETCH, payload: res.data })
          })
          .catch(e => dispatch({ type: FAILED_FETCH, payload: e}))
}
export const addFriend = (newFriend) => dispatch => {
    dispatch({type:START_FETCH})
    axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
          .then(res => {
            dispatch({ type: SUCCESFUL_FETCH, payload: res.data })
          })
          .catch(e => dispatch({ type: FAILED_FETCH, payload: e}))
}