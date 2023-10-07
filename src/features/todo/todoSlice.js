import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value:[],
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:
            (state,action) => {
                (state.value) = [...state.value,action.payload];
            }, 
        deleteTodo:
            (state,action)=>{
               state.value.splice(action.payload,1)
            }
         
    } 

})

export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer