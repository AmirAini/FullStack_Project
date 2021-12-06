import axios from 'axios';


//!Register
export const addUser = (data) => (dispatch) => {
    axios.post('http://2c46-49-124-200-218.ngrok.io/api/register', {
        name: data.name,
        email: data.email,
        password:data.password,
    })
        .then(function (response) {
            console.log(response.request.status);
            dispatch({
                type:'REGISTER_SUCCESS',
                payload: response.request.status
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

//!Login
export const tokenAdd = (data) =>  (dispatch) => {
    axios.post(`http://2c46-49-124-200-218.ngrok.io/api/login`, {
        email: data.email,
        password: data.password,
    })
    .then(function (response) {
        console.log(response);
        let data = response.data;
        dispatch ({
            type:'LOGIN_SUCCESS',
            payload: data,
        })
    })
    //!if fail
    .catch(function(error){
        console.log(error)
        dispatch({
            type:'LOGIN_FAIL',
        })
    });
};

//!Logout 
export const logoutAct = () => (dispatch) => {
    // console.log('hit');
        dispatch({
            type: "LOGOUT",
    })
};