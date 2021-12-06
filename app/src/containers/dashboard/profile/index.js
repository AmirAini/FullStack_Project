import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, Touchable } from "react-native";
import {useSelector} from 'react-redux';
import { logoutAct } from "../../redux/actions";
import {useDispatch} from 'react-redux';
import {textTitle,loginContainer, PRIMARY_COLOR, textBody,buttonStyleUpdate,cardHolder,buttonStyleLogout, profileContainer, cardButtonHolder} from "../../../assets/styles";

function Profile(props){

    const login = useSelector((state)=>state.login);
    const dispatch = useDispatch();
    function logout(){
        // console.log('hit logout');
        dispatch(logoutAct())
    }


    //! days active
    const date_created =login.date_created
    const date = new Date(Date.parse(date_created));
    const today = new Date();
    const dif = today - date;
    const active = Math.floor(dif/(1000*60*60*24));

    console.log(today);
    console.log(date);
    console.log('you are active', active, 'days');

    //! pie chart 

    


    return(
        <SafeAreaView style={profileContainer}>
            <View>

                <View style={{ marginBottom:10 }}>
                <Text  style={{ color: PRIMARY_COLOR, fontSize:16, margin:10}}>USER INFORMATION:</Text>
                <Text  style={{ color: PRIMARY_COLOR, fontSize:16, margin:10}}>Username: {login.name}</Text>
                <Text  style={{ color: PRIMARY_COLOR, fontSize:16, margin:10}}>User Email: {login.email}</Text>
                
                <Text style={{ color: PRIMARY_COLOR, fontSize:16, margin:10}}>Account Active: {active} days</Text>
                </View>

                <Image 
                    source={require('../../../assets/pic1.png')}
                    style={{ width: 220, height:180, marginBottom:10, borderRadius: 10 }}
                />
                <TouchableOpacity onPress={logout} style={{ width:100, justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    borderWidth: 2,
                    borderColor: 'black',
                    marginTop: 5,
                    borderRadius: 10,
                    backgroundColor: 'whitesmoke',}}>

                    <Text >LogOut</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Profile;