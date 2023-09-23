import { View, Text, TextInput,TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native'
import { addUser } from '../redux/slices/UserSlices'

const Home = ({navigation}) => {
  const [inputValue, setInputValue] = useState({
    name:"",
    contact:"",
    age:""
  })
  const Dispatch=useDispatch()
  const handleClick=()=>{
    Dispatch(addUser(inputValue))
    setInputValue({
      name:"",
      contact:"",
      age:""
    })
    navigation.navigate('Users')

  }
  const handleChange=(evt,name)=>{
    const { text } = evt.nativeEvent;
   setInputValue((prev)=>{
    return{
      ...prev,
      [name]:text
    }
  })

 
  }
  return (
    <View className='Home'>
    <View className="ml-5 flex-col mt-16">
      <View className="w-100 h-13 mt-5 bg-blue-800 mr-5 rounded-md pl-3 py-1">
      <Text className="font-bold text-base text-white">Username :</Text>
      <TextInput placeholder='Enter Name . . .' className="text-white" name='name'  onChange={(evt) =>handleChange(evt, "name")}value={inputValue.name} placeholderTextColor="white"/>
      </View>
      <View className="w-100 h-13 mt-4 bg-blue-800 mr-5 rounded-md pl-3 py-1">
      <Text className="font-bold text-base text-white">Contact :</Text>
      <TextInput placeholder='Enter Contact . . . ' className="text-white"  onChange={(evt) =>handleChange(evt, "contact")} value={inputValue.contact} placeholderTextColor="white"/>
      </View>
      <View className="w-100 h-13 mt-4 mb-5 bg-blue-800 mr-5 rounded-md pl-3 py-1">
       <Text className="font-bold text-base text-white">Age :</Text>
      <TextInput placeholder='Enter age . . .' className="text-white" onChange={(evt) =>handleChange(evt, "age")} value={inputValue.age} placeholderTextColor="white"/>
      </View>
      <TouchableOpacity onPress={handleClick} className="bg-blue-500 w-24 py-2 self-center rounded-lg"> 
      <Text className="text-center text-white">Add User</Text>
      </TouchableOpacity>

    </View>


  </View>
  )
}

export default Home