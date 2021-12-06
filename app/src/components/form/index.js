import React, {useState} from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {buttonStyle, buttonStyleAddtask, buttonStyleDelete, form_holder,form_tasks,form_tasksHead} from "../../assets/styles";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { RadioButton } from 'react-native-paper';


function FormComponent ({data,formData,postData,setFormData,task,setTask,description,setDescription,category,setCategory, editData, addTask, createData, closeForm,updateData, openForm},props){

    // console.log(formData);
    // console.log(task);
    const [loginID,setLoginID]= useState(false);
    const [checked, setChecked] = useState('');
    
    
    const login = useSelector((state)=>state.login);   
    
        
    
    return(
        <View style={form_holder}>
            {formData && 
            (
                <View>
                    <View>
                        {loginID && (<TextInput type='hidden' defaultValue={login.id}/>)}

                        <TextInput type='text' style={form_tasksHead} placeholder="Task" onChangeText={setTask} defaultValue={task}/>
                        <TextInput type='text' style={form_tasks} placeholder="Description" onChangeText={setDescription} multiline numberOfLines={3} defaultValue={description}/>
                        
                        <RadioButton.Group>
                            <RadioButton.Item color='#00ADB5' label="Important" labelStyle={{color:'white'}} value={setCategory(1)} status={ checked == '1' ? 'checked' : 'unchecked' } onPress={() => setChecked('1')}/>

                            <RadioButton.Item color="#00ADB5" label="Casual" labelStyle={{color:'white'}} value={setCategory(0)} status={ checked == '0' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('0')}
                                label="Casual" />

                        </RadioButton.Group>
                        
                    </View>

                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity style={buttonStyleAddtask} onPress={editData? updateData : postData}>
                            <Text>{editData ? 'Update' : 'Save'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={buttonStyleDelete} onPress={()=>openForm()}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>)}
        </View>
    )}

export default FormComponent;

