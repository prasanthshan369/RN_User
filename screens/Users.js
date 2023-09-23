import { View, Text,SafeAreaView, TouchableOpacity,StatusBar, Button, TouchableHighlight} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { removeUsers } from '../redux/slices/UserSlices';
import UserDetails from '../components/UserDetails';
const Users = () => {
  const User=useSelector((state)=>state.UserData.Users)
  const dispatch=useDispatch()
  const deleteUser=(id)=>{
    dispatch(removeUsers(id))
  }
  return (
    <SafeAreaView className="bg-white flex-1">
        <StatusBar barStyle={'light-content'}/>
      <View className=" max-h-[60%]">
      {
       User.length !==0 ?(
        User.map((item,index)=>{
          return(
            <UserDetails name={item.name} contact={item.contact} age={item.age} key={index} deleteUser={()=>deleteUser(index)}/>
          )
        })
       ):(
        <View className="flex-col items-center justify-center" style={{height:'100%'}}>
        <Text className="text-yellow-950 font-bold text-2xl">List Is Empty</Text>

          </View>
       )
     }

</View>
    </SafeAreaView>
  )
}

export default Users
