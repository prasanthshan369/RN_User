import React from 'react'
import { View,Button,Text, TouchableOpacity } from 'react-native'

const UserDetails = ({name,contact,age,deleteUser}) => {
  return (
    <View className="mt-3 mx-5 bg-blue-400 py-2 px-2 rounded-lg ">
        <Text className="text-lg">Name : {name}</Text>
        <Text className="text-lg">Contact :{contact}</Text>
        <Text className="text-lg"> Age: {age}</Text>
        <TouchableOpacity onPress={deleteUser} className="mt-2 bg-red-600 w-20 self-center rounded-sm py-1">
            <Text className="text-center text-white">Delete</Text>
        </TouchableOpacity>
    </View>
  )
}

export default UserDetails