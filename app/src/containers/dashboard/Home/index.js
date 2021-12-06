import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, ScrollView, FlatList, Alert, TouchableOpacity, Image } from "react-native";
import {useSelector} from 'react-redux';
import {buttonStyle, buttonStyleAddtask, form_holder} from "../../../assets/styles";
import axios from "axios";
import { useScrollToTop } from '@react-navigation/native';

import CardComponent from "../../../components/cards";
import FormComponent from "../../../components/form";



function Home (props){
    const login = useSelector((state)=>state.login);
    const [todolist,setTodolist]= useState('');
    const [formData, setFormData] = useState(false);
    const [timeout, setTimeout] = useState(false)
    const [task,setTask]= useState('');
    const [description,setDescription]= useState('');
    const [category,setCategory]= useState('');
    const [editData, setEditData] = useState(false);
    const [taskID,setTaskID]= useState('');
    const [addTask,setAddTask]=useState(true)
    const [isLoading, setIsLoading]=useState(true);
    const API_URL='http://2c46-49-124-200-218.ngrok.io'

    let id=login.id;

    let auth_tokn = login.token;
    
    // console.log(auth_tokn);


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
    


    function getTodolist(){
        axios.get(`${API_URL}/api/todolist/${id}`)
        .then(function (response) {
        
        setTodolist(response.data);
        loadState();        
        
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        getTodolist()
    },[]);
    
    //!Delete
    
    function deleteTodolist(del_dataId){
        console.log('hit');
        console.log('del',del_dataId);


        Alert.alert(
            'Are you deleting this record?',
            'Click to confirm',[
                {
                text:'Yes', onPress:()=>{

                    authAxios.delete(`${API_URL}/api/todolist/${del_dataId}`)
                    .then(function (response) 
                    {
                        
                        getTodolist();
                        alert('Record Successfully Deleted')
                        setAddTask(true);
                        setTodolist(response.data);
                        getTodolist();
                        loadState();
                        setIsLoading(true)
                    })
                    .catch(function (error) {
                    console.log(error);
                });
                }},

                {text:'No', onPress:()=>{
                    alert('Deletion Cancel')
                }
            }]
        )}
        

        function closeForm(){
            setFormData(true);
            setEditData(false);
            setAddTask(false);
        }

        function openForm(){
            setFormData(false);
            setEditData(false);
            setAddTask(true);
            setTask('');
            setDescription('');
            
        }
        

        console.log(task);
        
        function createTodolist(){
            authAxios.post(`${API_URL}/api/todolist`,{
                users_id: id,
                task: task,
                description: description,
                category:category,
                })
                
                .then((response)=> {
                    console.log(response);
                    alert('upload success')
                    
                    // reset
                    getTodolist();
                    setTask('');
                    setDescription('');
                    setFormData(false);
                    setCategory('');
                    setAddTask(true);
                    setIsLoading(true)
                  })
                  .catch(function (error) {
                    console.log(error);
                    alert('Upload Error')
                  });
            }

            console.log(taskID);
            
        function showTodolist(taskID){
            
            axios.get(`${API_URL}/api/get/todolist/${taskID}`)
            .then(function (response) {
            getTodolist();
            setTask(response.data[0].task);
            setDescription(response.data[0].description);
            
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        function updateTodolist(){
            // console.log('hit update');
            // useScrollToTop(ref);
                    
            authAxios.put(`${API_URL}/api/todolist/${taskID}`,
            {
                task: task,
                description: description,
                category: category,
              })
            .then(function (response) {
            console.log(response);
                alert('upload success')
                
                // reset
                setTask('');
                setDescription('');
                setFormData(false);
                setCategory('');
                setTodolist(response.data);   
                setAddTask(true);
                getTodolist();
                setIsLoading(true)
            })
            .catch(function (error) {
                console.log(error);
                alert('Update Error')
            });
            
        }
        

        function showUpdate(taskID){
            
            
            alert('updating default value loading, please wait.')
            
            setIsLoading(true)
            setFormData(true);
            setEditData(true);
            setAddTask(false);
            showTodolist(taskID)
            setTaskID(taskID)
        
        }

        if(login.token == ''){
            props.navigation.navigate("Login")
        }
        
        function _renderEmptyView(){
            return(
                <Text style={{ fontWeight: 'bold', fontSize:20 }}>There is no task yet.</Text>
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


        function _renderView(item){
            return(

                <CardComponent 
                key={item.name} 
                data={item} 
                formData={formData} 
                setFormData={setFormData}
                setTaskID={setTaskID}
                deleteTodolist={deleteTodolist}
                showUpdate={showUpdate}
                />
            )
        }



    return (
            <SafeAreaView style={{ flex:1, backgroundColor:'#393E46' }}>
            
            {isLoading && <View style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:20 }}><Text style={{ color:'white', margin:10 }}>LOADING</Text><Image source={require('../../../assets/load.gif')} style={{ width: 200, height:150, marginBottom:10, borderRadius: 10}} /></View>}
            
            {!isLoading  && 
            
            <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{display:'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            
            

            <Text style={{ fontWeight: 'bold', fontSize:20, color:'white', marginTop:10 }}>TASKS </Text>
            
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
            postData = {createTodolist}
            showTodolist={showTodolist}
            updateData={updateTodolist}
            addTask={addTask}
            openForm={openForm}
            props={login.name}
            /> 

            <FlatList
                data={todolist}
                renderItem={({item}) => (
                    _renderView(item)
                )}
                ListEmptyComponent={()=>(
                    _renderEmptyView()
                )}
                />
            </ScrollView>
            
            }
        </SafeAreaView>

    )
}

export default Home;