
const initialState ={
    id:'',
    name:'',
    email:'',
    token:'',
    date_created:'',
}

const loginReducer = (state=initialState,action) => {
    switch (action.type){
        case 'LOGIN_SUCCESS':
            return {
                id: action.payload.user.id,
                name: action.payload.user.name,
                email: action.payload.user.email,
                date_created: action.payload.user.created_at,
                token: action.payload.access_token,
            }
        case 'LOGIN_FAIL':
            return {
                name:"",
                id:'',

                email:1,
                token:'',
            }
        case 'LOGOUT':
            return {
                name:"",
                id:'',
                email:'',
                token:'',
            };
        default:
            return state;
    }
}

export default loginReducer;