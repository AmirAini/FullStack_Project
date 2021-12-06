import React, {useState, useEffect} from "react"
import {useSelector} from 'react-redux';
import axios from "axios";
// import {withRouter} from 'react-router-dom';
import CardComponent from "../card";

    

function Step(props){

    const [step,setStep]= useState('');
    const [taskID,setTaskID]= useState('');   
    const login = useSelector((state)=>state.login);
    let id=login.id;


    console.log(taskID);
    

    useEffect(() => {
        getTodolistID()
    },[]);

    function getTodolistID(){
        axios.get(`http://a30e-49-124-200-218.ngrok.io/api/todolist/${taskID}`)
        .then(function (response) {
        
        setStep(response.data);        
        
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <h1>step</h1>
    )
}

export default Step;