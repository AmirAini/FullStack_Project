import React from "react";
import { SafeAreaView, View, Text, Touchable, TouchableOpacity } from "react-native";
import {textTitle, textBody, buttonStyleDelete,buttonStyleUpdate,cardHolder, cardButtonHolder} from "../../assets/styles";
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';



function CardComponent({data, showUpdate, deleteTodolist,deleteStep}){
    const login = useSelector((state)=>state.login);
    const navigation = useNavigation();
    
    
    
    return(
            <View style={cardHolder}>
                <View>
                <TouchableOpacity style={textTitle}  onPress={data.todolist_id ? ()=>navigation.navigate("Home")  :()=>navigation.navigate("Steps", data)}>
                    <Text style={{ textDecorationLine: 'underline', color:'black', fontSize:16  }}>Task: {data.task}</Text>
                </TouchableOpacity>
                </View> 

                <View>
                    <Text style={textBody}>Desc: {data.description}</Text>
                    <Text style={{ marginTop:5,marginBottom:5 }}>Category:{data.category == 1 ? "Important" : "Casual"}</Text>
                </View> 

                <View style={cardButtonHolder}>
                    <TouchableOpacity onPress={()=>showUpdate(data.id)} style={buttonStyleUpdate}>
                        <Text style={{ color:'white' }}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={data.todolist_id ? ()=>deleteStep(data.id) : ()=>deleteTodolist(data.id)} style={buttonStyleDelete}>
                        <Text style={{ color:'white' }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default CardComponent;