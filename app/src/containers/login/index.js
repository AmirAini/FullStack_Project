import React, {useState} from "react";
import { SafeAreaView, View, Text, Image,TextInput, TouchableOpacity, ScrollView } from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle, loginContainer, buttonStyleFront, buttonStyleAddtask,buttonStyleUpdate, inputStyleFront} from "../../assets/styles";
import {useDispatch,useSelector} from 'react-redux';
import { tokenAdd } from "../redux/actions";

function Login(props){

    const login = useSelector(state => state.login)
    const [emailInput,setEmailInput] = useState('');
    const [passwordInput, setPasswordInput]=useState('');
    const dispatch = useDispatch()

    // console.log(login);

    if(login.token !=''){
        // alert(`Welcome ${login.name}`)
        props.navigation.navigate("TabNav")
    }
    

    function submit(){
        // console.log('hit');
        let data ={
            email:emailInput,
            password:passwordInput,
        }
        dispatch(tokenAdd(data))
    }

    return(
        <SafeAreaView style={loginContainer}>
          
        <Image 
            source={require('../../assets/pic1.png')}
            style={{ width: 200, height:150, marginBottom:10, borderRadius: 10 }}
        />
        <Text style={{ color: PRIMARY_COLOR, fontSize:30, margin:10}}> ACTIVITY-TREKKER </Text>
        <Text style={{ color: PRIMARY_COLOR, fontSize:20}}>LOGIN</Text>
        
        <TextInput placeholder="Email" keyboardType="default" style={inputStyleFront} onChangeText={setEmailInput} value={emailInput}/>
        <TextInput placeholder="Password" keyboardType="default" secureTextEntry={true} style={inputStyleFront} onChangeText={setPasswordInput}  value={passwordInput}/>


            <TouchableOpacity style={buttonStyleFront} onPress={submit}>
                <Text>Login</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={buttonStyleFront} onPress={()=>props.navigation.navigate("Register")}>
                <Text>Register</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

export default Login;