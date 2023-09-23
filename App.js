import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Offers from './screens/About'
import {Entypo,FontAwesome,Ionicons}from '@expo/vector-icons'
import Home from './screens/Home'
import Users from './screens/Users'
import About from './screens/About'
import { Provider } from 'react-redux'
import { store } from './redux/store/Store'
const Stack=createNativeStackNavigator()
const Tab=createMaterialTopTabNavigator()

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Tabs'>
        <Stack.Screen name='Users' component={Users} options={{
          headerShown:false,
          presentation:'modal',
        }}/>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown:false,
          presentation:'modal',
        }}/>
          <Stack.Screen name='About ' component={About} options={{
          headerShown:false,
          presentation:'modal',
        }}/>
     
         <Stack.Screen name='Tabs' component={TabNavigator} options={{
          title: 'User CMS', 
          headerBackVisible:false,
            headerStyle: {
            backgroundColor: 'rgba(16,24,33,255)',
          },  headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   headerRight: () => (
            <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>
          ), 
            headerBackTitleVisible:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
const TabNavigator = () => {
  return (

     <Tab.Navigator initialRouteName='Home'      screenOptions={{
      lazy: true,
      tabBarPressOpacity: 1,
      tabBarPressColor: '#0000',
      tabBarContentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      }
      
    }}>
      
    <Tab.Screen name='Home' component={Home} options={{
       tabBarStyle:{
        backgroundColor:'#fff',
        height:35,
        
      },
    }}/>
    <Tab.Screen name='Users' component={Users} options={{
       tabBarStyle:{
        backgroundColor:'#fff',
        height:30,
      },
    }}/>
    <Tab.Screen name='About ' component={About} options={{
       tabBarStyle:{
        backgroundColor:'#fff',
        height:30,
        
      },
    }}/>
   </Tab.Navigator>

  
  )
}

const style = StyleSheet.create({
  tabBarStyle: {
    alignSelf: "center",
    flexDirection: "row",
  },
  tabBarItemStyle: {
    width: "auto",
  }
})
export default App


