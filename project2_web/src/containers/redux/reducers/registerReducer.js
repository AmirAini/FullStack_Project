//!step1 

const initialState=0;

const registerReducer= (state=initialState, action) => {
    switch (action.type){
        case 'REGISTER_SUCCESS':
            return action.payload;
        case 'REGISTER_FAIL':
            return action.payload;
        default:
            return state;
    }
}

export default registerReducer;