import React, {useState, useEffect} from "react";
import Navbar from "../../../components/frontend/navbar";
import classes from "./login.module.css";
import {useDispatch, useSelector} from 'react-redux';
import { tokenAdd } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';


// import {useHistory} from 'react-router-dom';

import Pic1 from '../../../assests/pic1.png';

function Login(){

    const navigate = useNavigate();
    const login = useSelector((state)=>state.login);
    const dispatch = useDispatch();
    const [loginInput,setInput] = useState({
        email:'',
        password:'',
    })
    function handleInput(e){
        setInput({...loginInput,[e.target.name]: e.target.value})
    }

    console.log(login);
    
    function loginSubmit(e){
        e.preventDefault();
        // send to action
        dispatch(tokenAdd(loginInput));
    }

    
    useEffect(() => {
        if (login.token !== ''){
            alert('Welcome')
            navigate('/dashboard')
        } else if (login.email == 1){
            alert('Login Error')
            navigate('/')
        }
    }, [login])
    
    
        
    return(
        <div>
            <Navbar/>
            <div className={classes.login_holder}>
                <div className={classes.image_holder}>
                <img src={Pic1} alt='' className={classes.login_image} />
                <h1>A C T I V I T Y - T R E K K E R </h1>
                </div>
                <div className="container py-1" className={classes.login_header}>
                    <div className='row justify-content-center'>
                        <div className='col md-6'>
                            <div className="card-header"  >
                                <h3>Login</h3>
                            </div>
                            <div className="card-body" className={classes.login_form}>
                                <form onSubmit={(e)=>loginSubmit(e)}>
                                    <div className="form-group mb-3">
                                        <lable >Email ID</lable>
                                        <input className="form-control" placeholder="Email" name="email"onChange={handleInput}  value={loginInput.email}  />
                                    </div>
                                    <div className="form-group mb-3">
                                        <lable  >Password</lable>
                                        <input type='password' placeholder="Password" className="form-control" name="password" onChange={handleInput} value={loginInput.password}/> 
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary" style={{ color:'smokeWhite' }}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}


export default Login; 