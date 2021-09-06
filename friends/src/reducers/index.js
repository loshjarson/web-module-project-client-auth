import {START_FETCH, SUCCESFUL_FETCH, FAILED_FETCH, ADDING_FRIEND, ADD_ERROR}  from '../actions/index';


export const initialState = {
    friends: [],
    isLoading: false,
    error: "",
}

const reducer = (state=initialState, action) => {
    console.log('reducer', action);
    switch(action.type) {
        case START_FETCH:
            return {...state, isLoading: true};
        case SUCCESFUL_FETCH:
            return {...state, friends: action.payload, isLoading: false};
        case FAILED_FETCH:
            return {...state, error: action.payload, isLoading: false};
        case ADDING_FRIEND:
            console.log([...state.friends, action.payload])
            return {...state, friends: [...state.friends, action.payload]};
        case ADD_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
               
    }
}

export default reducer;