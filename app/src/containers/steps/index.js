import React, { useEffect, useState} from "react";
import { SafeAreaView, View,FlatList, Text, ScrollView, TouchableOpacity, Alert, Image } from "react-native";
import {buttonStyle, buttonStyleAddtask, form_holder} from "../../assets/styles";
import axios from "axios";
import {useSelector} from 'react-redux';
import CardComponent from "../../components/cards";
import FormComponent from "../../components/form";

function Steps(props){
    let data = props.route.params
    let taskId= data.id;
    const login = useSelector((state)=>state.login);
    const [formData, setFormData] = useState(false);
    const [timeout, setTimeout] = useState(false)
    const [task,setTask]= useState('');
    const [description,setDescription]= useState('');
    const [category,setCategory]= useState('');
    const [editData, setEditData] = useState(false);
    const [stepID,setStepID]= useState('');
    const [addTask,setAddTask]=useState(true);
    const [isLoading, setIsLoading]=useState(true);

    const API_URL = 'http://2c46-49-124-200-218.ngrok.io'

    const [step, setStep]=useState('');
    
    
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

    console.log('task data',data);
    
    useEffect(() => {
        getByTodolistId()},[]);

        console.log(step);
        
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

        function showUpdate(stepID){
            setFormData(true);
            setEditData(true);
            setAddTask(false);

            setStepID(stepID)
        }

    function getByTodolistId(){
        axios.get(`${API_URL}/api/step/${taskId}`)
        .then(function (response) {
        console.log(response);
        
        setStep(response.data);   
        loadState();  
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function _renderEmptyView(){
        return(
            <Text style={{fontWeight: 'bold', fontSize:20, color:'white'}} >This Task Have No Steps Yet</Text>
        )
    }

    function _renderView(item){
        return(


            <CardComponent 
            key={item.name} 
            data={item} 
            // formData={formData} 
            // setFormData={setFormData}
            // setTaskID={setTaskID}
            // deleteTodolist={deleteTodolist}
            showUpdate={showUpdate}
            deleteStep={deleteStep}
            />
        )
    }

    function createStep(){
        authAxios.post(`${API_URL}/api/step`,{
            todolist_id: taskId,
            task: task,
            description: description,
            reflection:category,
                })
                
                .then((response)=> {
                    console.log(response);
                    alert('upload success')
                    
                    // reset
                    getByTodolistId();
                    setTask('');
                    setDescription('');
                    setFormData(false);
                    setCategory('');
                    setAddTask(true);
                    loadState();  

                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        
            console.log(stepID);


    //!update
    function updateStep()
    {
        authAxios.put(`${API_URL}/api/step/${stepID}`,
            {
                task: task,
                description: description,
                reflection: category,
              })
            .then(function (response) {
            console.log(response);
                alert('upload success')
                
                // reset
                getByTodolistId();
                setStep('');
                setDescription('');
                setFormData(false);
                setCategory('');
                // setTodolist(response.data);   
                setAddTask(true);
                loadState();  
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    //!Deleted
    function deleteStep(del_dataId){
        console.log('hit');
        console.log('del',del_dataId);

        Alert.alert(
            'Are you deleting this record?',
            'Click to confirm',[
                {
                text:'Yes', onPress:()=>{

                    authAxios.delete(`${API_URL}/api/step/${del_dataId}`)
                    .then(function (response) {
                    console.log(response);
                    alert('Record Successfully Deleted')
                    setAddTask(true);
                    // setTodolist(response.data);   
                    getByTodolistId();
                    loadState();  
                    })
                    .catch(function (error) {
                    console.log(error);
                });
                }},

                {text:'No', onPress:()=>{
                    alert('Deletion Cancel')
                }
            }]
        )
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
        <SafeAreaView style={{ flex:1, backgroundColor:'#393E46' }}>

            {isLoading && <View style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:20 }}><Text style={{ color:'white', margin:10 }}>LOADING</Text><Image source={require('../../assets/load.gif')} style={{ width: 200, height:150, marginBottom:10, borderRadius: 10}} /></View>}

            {!isLoading && 
            <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{display:'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>

            <Text style={{ fontWeight: 'bold', fontSize:20, color:'white' }}>STEPS</Text>

            {addTask && 
            <TouchableOpacity onPress={()=>closeForm()} style={buttonStyleAddtask}>
                <Text>Add Task</Text>
            </TouchableOpacity>}
            
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
            postData={createStep}
            updateData={updateStep}
            addTask={addTask}
            openForm={openForm}
            /> 



            <FlatList
                data={step}
                renderItem={({item}) => (
                    _renderView(item)
                    
                )}
                
                ListEmptyComponent={()=>(
                    _renderEmptyView()
                )}
                />

            </ScrollView>}
        </SafeAreaView>

    )
}

export default Steps;