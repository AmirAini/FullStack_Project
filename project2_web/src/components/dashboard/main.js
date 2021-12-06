import React, {useEffect, useState} from "react";
import classes from './main.module.css';
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux';
import {getTodolist} from '../../containers/redux/actions'
import {Card, Button, Form, FormControl} from 'react-bootstrap';
import CardComponent from "./card";
import FormComponent from "./form";
import { data } from "autoprefixer";
import gif1 from '../../assests/pic1.png';


function Main(props){

    //change states
    const login = useSelector((state)=>state.login);
    const [todolist,setTodolist]= useState('');
    const [formData, setFormData] = useState(false);
    const [task,setTask]= useState('');
    const [description,setDescription]= useState('');
    const [category,setCategory]= useState('');
    const [editData, setEditData] = useState(false);
    const [taskID,setTaskID]= useState('');    
    const [addTask,setAddTask]=useState(true)
    let id=login.id;
    const [isLoading, setIsLoading]=useState(true);
    let auth_tokn = login.token;

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${auth_tokn}`;
            return config
        },
        error=>{
            return Promise.reject(error)
        }
    )

    
    const  authAxios = axios.create({    
        headers:{
            Authorization: `Bearer ${auth_tokn}`
        }
    })
    
    

    //!when refresh load once
    useEffect(() => {
        getTodolist()
    },[]);
    


    //!axios fetch
    function getTodolist(){
        axios.get(`http://55b1-49-124-200-218.ngrok.io/api/todolist/${id}`)
        .then(function (response) {
        
        setTodolist(response.data); 
        loadState();         
        
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    // console.log(task);

    //!axios create
    function createTodolist(){
        // console.log('hit');
        
        axios.post('http://55b1-49-124-200-218.ngrok.io/api/todolist', {
        users_id: login.id,
        task: task,
        description: description,
        category:category
          })
          .then(function (response) {
            console.log(response);
            alert('upload success')
            loadState();  
            // reset
            getTodolist();
            setTask('');
            setDescription('');
            setFormData(false);
            setCategory('');
            setAddTask(true);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    function showTodolist(taskID){
        console.log(taskID);
        
    }

    function showUpdate(taskID){
        console.log(taskID);
        
        setFormData(true);
        setEditData(true);
        setAddTask(false);
        
        
        // showTodolist(taskID)
        setTaskID(taskID)
    }

    console.log(taskID);
    console.log(task);
    console.log(category);
    
    

    function closeForm(){
        setFormData(true);
        setEditData(false);
        setAddTask(false);
    }

    function openForm(){
        setFormData(false);
        setEditData(false);
        setAddTask(true);
    }




    //!update
    function updateTodolist(){
        console.log('hit update');
        console.log(taskID);
        
        axios.put(`http://55b1-49-124-200-218.ngrok.io/api/todolist/${taskID}`,
        {
            Authorization:auth_tokn,
            task: task,
            description: description,
            category: category,
          })
        .then(function (response) {
        console.log(response);
            alert('update success')
            
            // reset
            getTodolist();
            setTask('');
            setDescription('');
            setFormData(false);
            setCategory('');
            setAddTask(true);
            loadState();  
            
        
        })
        .catch(function (error) {
            // console.log(error);
        });
        
    }
    
    function deleteTodolist(del_dataId){
        console.log('delete hit');
        console.log(del_dataId);

        

        let decision=prompt("Confirm to delete, type: 'YES'");
            if (decision =='YES')
            {
                console.log('delete');
                axios.delete(`http://55b1-49-124-200-218.ngrok.io/api/todolist/${del_dataId}`,{token:auth_tokn})
                .then(function (response) {
                    console.log(response);
                    alert('Record Successfully Deleted')
                    setAddTask(true);
                    getTodolist();
                    loadState();  
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                alert('Deletion Cancelled ')

            }   
        }

        function loadState(){
            setTimeout(() => {
                setIsLoading(true)
            }, 3000);
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }

    return(
        <div className="row display-flex justify-content-center mt-8" style={{ padding:10 }} >
            <div className= 'col-md-7'>

                {isLoading && <div style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:20 }}><h2 style={{ color:'black', margin:10 }}>LOADING</h2>
                <img source={gif1} alt='loading' style={{ width: 200, height:150, borderRadius: 10}}  /></div>}
            
                {!isLoading && 
                <>
                <FormComponent 
                formData={formData} 
                setFormData={setFormData}
                closeForm={closeForm} 
                task={task} 
                setTask={setTask} 
                description={description} 
                setDescription={setDescription} 
                category={category}
                setCategory={setCategory} 
                editData={editData}
                createTodolist = {createTodolist}
                showTodolist={showTodolist}
                updateTodolist={updateTodolist}
                addTask={addTask}
                openForm={openForm}
                />
    
                {todolist && todolist.map((item)=> 
                <CardComponent 
                key={item.id} 
                
                data={item} 
                formData={formData} 
                setFormData={setFormData}
                showUpdate={showUpdate}
                
                setTaskID={setTaskID}
                deleteTodolist={deleteTodolist}
                />)}
                </>}
            </div>
        </div>
    )
}

export default Main; 