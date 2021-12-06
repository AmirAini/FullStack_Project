import React from "react";
import {useSelector} from 'react-redux';
import pic2 from '../../../assests/pic2.png';
import classes from './profile.module.css';


function Profile(props){
    const login = useSelector(state => state.login)
    console.log(login);
    
    const date= login.date_created

    // Split timestamp into [ Y, M, D, h, m, s ]
    const t = date.split(/[- :]/);
    const displayDate = `${t[0]}-${t[1]}-${t[2]}`
    console.log(displayDate);
    
    const d = new Date(Date.parse(date));
    const today = new Date()
    const dif= Math.floor((today-d)/(1000*60*60*24))

    console.log(dif);
    
    
    
    return(
        <div className={classes.profile_layout}>
            <h1>User Profile</h1>
            <div className={classes.profile_holder}>
                
                <div className={classes.profile_left}>
                    {/* <img src={pic2} className={classes.profile_image}/> */}
                    
                </div>
                <div className={classes.profile_right}>
                    <h4>Username:</h4>
                    <p>{login.name}</p>
                    <h4>User Email:</h4>
                    <p>{login.email}</p>
                    <h4>Account Register:</h4>
                    <p>{displayDate}</p>
                    <h4>Active Days:</h4>
                    <p>{dif}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;