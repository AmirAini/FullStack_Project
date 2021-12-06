import React from "react";
import {Card, Button,ButtonGroup} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {navigation} from 'react-router-dom';
import classes from './card.module.css';

function CardComponent ({data, setFormData, setEditData, showTodolist,showUpdate,updateTodolist,deleteTodolist}){

    const login = useSelector((state)=>state.login);
    // console.log(data);

    // console.log(data.id);
    
    return(
        <div>
            <Card className={classes.card_holder}  >
                <Card.Body>
                    <Card.Title>{data.task}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    <Card.Text>{data.date}</Card.Text>
                    <Card.Text>{data.category == 1  ? "Important" : "Casual" } </Card.Text>

                    <ButtonGroup aria-label="Basic example">
                        <Button variant="info" className="m-2 size-sm" onClick={()=>showUpdate(data.id)} >Update</Button>
                        <Button variant="danger" className="m-2 size-sm" onClick={()=>deleteTodolist(data.id)}
                        >Delete</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
    </div>

    )
    
    
}

export default CardComponent;