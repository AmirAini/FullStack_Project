import axios from "axios";
import React, {useState, useEffect} from "react";
import Navbar from "../../../components/frontend/navbar";
import {useDispatch, useSelector} from 'react-redux';
import { addUser } from "../../redux/actions";




function Register(){

    const register = useSelector((state)=>state.register)
        
    
    const dispatch = useDispatch();
    const [registerInput,setRegister] = useState({
        username:'',
        email:'',
        password:'',
    })

    function handleInput(e){
        setRegister({...registerInput,[e.target.name]: e.target.value})
    }


    //!step 2 use useEffect to navigate
    console.log(register);
    useEffect(() => {
        if (register == 201){
            alert('Registration succesful')
            // navigate('')
        }
        // else if (register ==0 ){
        //     alert('User  Unsuccessful')
        // }
    },[register]) 
    

    function registerSubmit(e){
        e.preventDefault();
        dispatch(addUser(registerInput))
        
    }

    return(
        <div>
            <Navbar/>
            <div className="container py-4" >
                <div className='row justify-content-center'>
                    <div className='col md-6'>
                        <div className="card-header" style={{ textAlign:'center' }}>
                            <h2>Register</h2>
                            <h5>Start Your Journey Today</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e)=>registerSubmit(e)}>
                                <div className="form-group mb-3">
                                    <lable>Username</lable>
                                    <input className="form-control" placeholder="Username" name="name" onChange={handleInput} value={registerInput.name}/>
                                    
                                    
                                </div>
                                <div className="form-group mb-3">
                                    <lable >Email ID</lable>
                                    <input className="form-control" placeholder="Email" name="email" onChange={handleInput} value={registerInput.email}/>
                                    
                                    
                                </div>
                                <div className="form-group mb-3">
                                    <lable  >Password</lable>
                                    <input type='password' placeholder="Password" className="form-control" name="password" onChange={handleInput} value={registerInput.password}/>
                                   
                                </div>
                                {/* <div className="form-group mb-3">
                                    <lable >Confirm Password</lable>
                                    <input type='password' className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={handleInput} value={registerInput.confirmPassword} />
                                </div> */}
                                <div className="form-group mb-3">
                                <button type="submit" className="btn btn-primary" style={{ color:'smokeWhite' }}>Submit</button>
                                </div> 
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register