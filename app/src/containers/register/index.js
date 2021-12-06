import React, {useState, useEffect} from 'react';
import {View,Text, TextInput, TouchableOpacity, SafeAreaView, Image} from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle, loginContainer, buttonStyle, inputStyleFront} from "../../assets/styles";
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../redux/actions';
import { useNavigation } from '@react-navigation/native';

function Register(props){

    const [nameInput,setNameInput] = useState('');
    const [emailInput,setEmailInput] = useState('');
    const [passwordInput, setPasswordInput]=useState('');

    const navigation = useNavigation();
    const register = useSelector(state => state.register)
    const dispatch = useDispatch();

    console.log(register);
    useEffect(() => {
        if (register == 201){
            alert('Registration succesful')
        }
    },[])

    function submit(){
        let loginInfo= {
            name:nameInput,
            email:emailInput,
            password:passwordInput
        }
        dispatch(addUser(loginInfo));
    }
    
    return(

        <SafeAreaView  style={loginContainer}>
            <Image source={require('../../assets/pic2.png')} style={{ width: 200, height:150, marginBottom:10, borderRadius: 10}} />
            <Text style={{ color: PRIMARY_COLOR, fontSize:30, margin:10}}>ACTIVITY-TREKKER</Text>
            <Text style={{ color: PRIMARY_COLOR, fontSize:20, marginBottom:10}}>Start The Journey Today</Text>
            
            <TextInput placeholder='Username' keyboardType='default' style={inputStyleFront} onChangeText={setNameInput} value={nameInput}/>
            <TextInput placeholder='Email' keyboardType='default' style={inputStyleFront} onChangeText={setEmailInput} value={emailInput}/>
            <TextInput placeholder='Password' keyboardType='default' secureTextEntry={true} style={inputStyleFront} onChangeText={setPasswordInput} value={passwordInput}/>
            
            <TouchableOpacity onPress={submit} style={buttonStyle}>
                <Text>Submit Registration</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default Register;