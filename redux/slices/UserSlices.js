import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Users:[]
}
export const UserSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.Users=[...state.Users,action.payload]
        
        },
        removeUsers:(state,action)=>{
            state.Users=state.Users.filter((item,index)=>index!==action.payload)
        }
    }
})
export const {addUser,removeUsers}=UserSlice.actions
export default UserSlice.reducer