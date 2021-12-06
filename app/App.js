import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

//redux
import { Provider } from 'react-redux';
import {store, persistor} from './src/containers/redux/store/configureStore'


import Login from './src/containers/login';
import Register from './src/containers/register';
import Home from './src/containers/dashboard/Home';
import Profile from './src/containers/dashboard/profile';
import Steps from './src/containers/steps';

//Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNav(){
  return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon: ({focused, color, size})=> {
        let iconName;
        if (route.name === 'Home'){
          iconName = focused 
          ? 'home-sharp' : 'home-outline' ;

        } else if (route.name ==='Profile'){
          iconName = focused 
          ? 'people-sharp' : 'md-people-outline' ;

        } 

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor:"black",
      tabBarInactiveTintColor:"lightgray"
    }
    )}>

      <Tab.Screen name="Home" component={Home} options={{
          headerStyle:{
            display:'flex',
            backgroundColor: '#222831',
            justifyContent: 'center',
            headerLeft: null,
            alignItems: 'center',
          },headerTitleStyle: {
            color: 'white'
          }
      }}/>

      <Tab.Screen name="Profile" component={Profile} options={{
       
      }}/>

     
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <Provider store={store} persistor={persistor}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          
          
          <Stack.Screen name="Login" component={Login} options={{
          headerStyle:{
            display:'flex',
            backgroundColor: '#222831',
            justifyContent: 'center',
            headerLeft: null,
            alignItems: 'center',
          },headerTitleStyle: {
            color: 'white'
          }
          }} />
          <Stack.Screen name="Register" component={Register} options={{
          headerStyle:{
            display:'flex',
            backgroundColor: '#222831',
            justifyContent: 'center',
            
            alignItems: 'center',
          },headerTitleStyle: {
            color: 'white'
          }
          }}/>
          <Stack.Screen name="Steps" component={Steps} options={{
          headerStyle:{
            display:'flex',
            backgroundColor: '#222831',
            justifyContent: 'center',
            headerLeft: null,
            alignItems: 'center',
          },headerTitleStyle: {
            color: 'white'
          }
      }}/>
          
          <Stack.Screen name="TabNav" component={TabNav} options=
          {{headerShown: false,}}/> 



        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
