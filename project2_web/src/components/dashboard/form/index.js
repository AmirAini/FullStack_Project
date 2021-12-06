import React from "react";
import { Fragment } from "react";
import {Card, Button, Form, FormControl, Dropdown} from 'react-bootstrap';
import { useSelector } from "react-redux";
import axios from "axios";

function FormComponent ({formData,setFormData,task,setTask,description,setDescription,category,setCategory, editData, setEditData, createTodolist, closeForm,updateTodolist, addTask, openForm}){

    // console.log(formData);
    // console.log(task);
    
    

    const login = useSelector((state)=>state.login);

    

    return(
        <Fragment>
            {/* onclick then true */}
            {addTask && (<Button stlye={{margin:100}} variant="primary" type="submit" size='sm' onClick={()=>closeForm()} >
                    Add Task
            </Button>)}

            {formData && (<Form className="mt-3">
                <Form.Group>
                    <Form.Control type="hidden" placeholder="Enter task" defaultValue={login.id}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Task" onChange={(e)=>setTask(e.target.value)} defaultValue={task}/>
                </Form.Group>

                <Form.Group style={{ marginTop:10, marginBottom:10, }}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Task Description" onChange={(e)=>setDescription(e.target.value)} defaultValue={description} />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="integer" placeholder="Enter the Status Number" onChange={(e)=>setCategory(e.target.value)} defaultValue={category}/>
                </Form.Group>

                
                <Button variant="success" size='sm'  onClick={editData? updateTodolist : createTodolist}>
                    {editData ? 'Update' : 'Save'}
                </Button>

                <Button variant="secondary" size='sm' onClick={()=>openForm()} style={{ margin:10 }}>
                    Cancel
                </Button>
            </Form>) }

            
            </Fragment>
    )
}

export default FormComponent;

