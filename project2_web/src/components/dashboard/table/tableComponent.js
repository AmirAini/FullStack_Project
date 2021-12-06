import React, {useState, useEffect} from "react";
import axios from "axios";
import TableRow from "./tableRow";
import {useSelector} from 'react-redux';
import { data } from "autoprefixer";

function TableComponent(props){

    const [todolist,setTodolist]= useState('');
    const login = useSelector((state)=>state.login);
    let id=login.id;

    useEffect(() => {
        getTodolist()
    },[]);

    function getTodolist(){

        axios.get(`http://55b1-49-124-200-218.ngrok.io/api/todolist/${id}`)
        .then(function (response) {
        
        setTodolist(response.data);        
        
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    

    return(
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Task Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Task Description</th>
                </tr>
            </thead>
            <tbody>
                {todolist && todolist.map((item)=> <TableRow key={item.id} data={item} />)}
            </tbody>
        </table>
    )
}

export default TableComponent;
