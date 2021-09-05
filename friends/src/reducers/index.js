import {START_LOGIN, SUCCESFUL_LOGIN, FAILED_LOGIN, ADDING_FRIEND, ADD_ERROR}  from '../actions/index';


export const initialState = {
    friends: [],
    isLoading: false,
    errorData: {
        errored: false,
        error: ""
    },
    body: {
        username: "",
        password: ""
    }
}

const reducer = (state=initialState, action) => {
    console.log('reducer', action);
    switch(action.type) {
        case START_LOGIN:
            return {...state, isLoading: true, errorData: {errored: false,
                error: ""}};
        case SUCCESFUL_LOGIN:
            return {...state, isLoading: false};
        case FAILED_LOGIN:
            return {...state, error: action.payload, isLoading: false};
        case ADDING_FRIEND:
            console.log([...state.friends, action.payload])
            return {...state, friends: [...state.friends, action.payload]};
        case ADD_ERROR:
            return {...state, errorData: {errored: true, error: action.payload}};
        default:
            return state;
               
    }
}


export default reducer;