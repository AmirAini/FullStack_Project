import axios from "axios";


const API_URL = 'http://localhost:8000/api'



//!Login
export const tokenAdd = (data) =>  (dispatch) => {
        axios.post(`${API_URL}/login`, {
            email: data.email,
            password: data.password
        })
        .then(function (response) {
            // console.log(response.data.access_token);
            console.log(response);
            let token = response.data.user.id
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

//!Register
export const addUser = (data) => (dispatch) => {
    axios.post('http://55b1-49-124-200-218.ngrok.io/api/register', {
        name: data.name,
        email: data.email,
        password:data.password
    })
    .then(function (response) {
        console.log(response.request.status);
        dispatch({
            type:'REGISTER_SUCCESS',
            payload: response.request.status
        })
        
      })
      .catch(function (error) {
        // console.log(error);
        dispatch({            
            type:'REGISTER_FAIL',
            payload: {error}
        })
      });
}

//!Logout
export const logoutAct = () => (dispatch) => {
    console.log('hit');
    
        dispatch({
            type: "LOGOUT",
    })
};


//!Get
// export const getTaskList= (data) => (dispatch) => {
//         axios.get(`http://a30e-49-124-200-218.ngrok.io/api/todolist/${data}`)
//         .then(function (response) {
//             console.log(response.data);
//         dispatch({
//             type:'GET_TODOLIST',
//             payload: response.data
//         })
        
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
