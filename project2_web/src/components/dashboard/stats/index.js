import React, {useState,useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import StatTable from "./statTable";
import { PieChart } from 'react-minimal-pie-chart';
import classes from './stats.module.css';

function StatComponent(props){
    const [todolist,setTodolist]= useState('');
    const login = useSelector((state)=>state.login);
    let id=login.id;

    

    useEffect(() => {
        getTodolist()
    },[]);

    console.log(todolist);
    let todolistFilter = todolist;

    console.log(typeof todolistFilter);
    // console.log(typeof [1,2,3]);
    
    console.log(todolistFilter[0]);
    
    let newArrCas = []
    for (let i=0; i < todolistFilter.length; i++){
        if (todolistFilter[i].category === 0){
            newArrCas.push(todolistFilter[i])
        }
    }

    let cas = newArrCas.length;
    console.log('cas', cas);
    
    
    let newArrImp = []
    for (let i=0; i < todolistFilter.length; i++){
        if (todolistFilter[i].category === 1){
            newArrImp.push(todolistFilter[i])
        }
    }
    console.log(newArrImp)
    
    let imp = newArrImp.length;
    console.log('imp', imp);
    

    const tot = imp + cas;

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
        <div className={classes.stat_holder}>
            <div className={classes.stat_table}>

            <h2 style={{ marginBottom:20 }}>{login.name}'s Tasks</h2>
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">Task Name</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                    {todolist && todolist.map((item)=><StatTable data={item}/>)}
                </tbody>
            </table>
            </div>
            
            <div className={classes.stat_chart}>
                <h1>Activity Chart</h1>
                <h6>Pending Important Task(s):</h6>
                <p>{imp} tasks or {(imp/tot)*100}%</p>
                <h6>Pending Casual Task(s):</h6>
                <p>{cas} tasks or {(cas/tot)*100}%</p>

                  <PieChart style={{ marginTop:-65 }}
                  label={(props) => { return props.dataEntry.title;}}
                  data={[{ title: "Important", value: imp, color: "#0D6EFD" },
                         { title: "Casual", value: cas, color: "#32D2F2" },
                  ]}labelStyle={{
                    fontSize: "10px"
                  }}/>

                  
            </div>
        </div>
    )
}

export default StatComponent;