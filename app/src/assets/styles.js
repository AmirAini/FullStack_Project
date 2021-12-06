import { Dimensions } from "react-native";

export const PRIMARY_COLOR = 'white';
export const Secondary_COLOR= 'orange';

export const inputStyleFront = {
    padding: 15,
        width: '50%',
        marginTop:5,
        marginBottom: 5,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 10,
        color:'#EEEEEE',
}

export const inputStyle = {
    padding: 15,
        width: '50%',
        marginTop:5,
        marginBottom: 5,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 10,
}

export const loginContainer= {
    flex: 1,
    width: '100%',
    padding:10,
    display: 'flex',
    flexDirection: 'column',    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393E46',
}

export const profileContainer= {
    flex: 1,
    width: '100%',
    padding:10,
    display: 'flex',
    flexDirection: 'column',    
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#393E46',
}


export const buttonStyle={
    width:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
} 

export const buttonStyleLogout={
    width:'150%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
} 

export const buttonStyleFront={
    width:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
    color: '#EEEEEE'
} 


export const textTitle={
    color:'black',
    fontWeight:'bold',
    fontSize: 25,
    marginBottom:10,

}

export const textBody={
    // marginBottom:5,
    // color:'black',
    // fontSize: 16,
    // textAlign:'justify'
    
}

export const buttonStyleUpdate={
    width:'40%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#00ADB5',
} 

export const buttonStyleDelete={
    width:'40%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#C85C5C',
    color:'white',
} 

export const buttonStyleAddtask={
    width:'40%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#00ADB5',
    color:'white',
} 


export const cardHolder={
    width:Dimensions.get('window').width*0.8,
    padding:10,
    borderWidth:2,
    borderColor:'black',
    borderRadius:10,
    backgroundColor:'#EEEEEE',
    marginTop:10,
    marginBottom:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    
    elevation: 15,
}

export const cardButtonHolder={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
}

export const form_holder={
    width:Dimensions.get('window').width*0.8,
    padding:10,
    // borderWidth:2,
    borderColor:'black',
    borderRadius:10,
    // backgroundColor:'#346751',
    marginTop:10,
    marginBottom:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
}

export const form_tasks={
    marginTop: 5,
    marginBottom:5,
    borderRadius:5,
}
