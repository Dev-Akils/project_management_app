import {createSlice, } from "@reduxjs/toolkit";
// PayloadAction<string>  PayloadAction
export interface Todo{
    id:number;
    text:string;
    completed:boolean;
}
interface TodoState{
    todos:Todo[];
}
const initialState:TodoState={
todos:[],
};

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action:{payload:string})=>{
            state.todos.push({
                id:Date.now(),
                text:action.payload,
                completed:false,
            })
        },
        toggleTodo:(state,action:{payload:number})=>{
            const todo=state.todos.find((t)=>t.id ===action.payload);
            if(todo) todo.completed=!todo.completed;

        },
        updateTodo:(state,action:{payload:{id:number; text:string}})=>{
            const todo=state.todos.find((t)=>t.id ===action.payload.id);
            if(todo) todo.text=action.payload.text;
        },
        deleteTodo:(state,action:{payload:number})=>{
            state.todos=state.todos.filter(t=>t.id !== action.payload);
        }
    }
})

export const {addTodo,toggleTodo,deleteTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;