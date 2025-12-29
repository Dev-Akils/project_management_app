import { createSlice } from "@reduxjs/toolkit";

export interface stopwatch{
    time:number;
    isRunning:boolean;

}


const initialState:stopwatch={
   time:0,
   isRunning:false,
}

const stopwatchSlice=createSlice({
    name:"stopwatch",
    initialState,
    reducers:{
        // start:(state,action?:{payload:boolean})=>{
        // if(action && action.payload !==undefined ){
        //     state.isRunning =action.payload;
        // }else{
        //     state.isRunning=true;
        // }

        // },
        start:(state)=>{
            state.isRunning=true;

        },

        stop:(state)=>{
            state.isRunning=false;
        },
        reset:(state)=>{
            state.time=0;
            state.isRunning=false;
        },
        tick:(state)=>{
            state.time+=1000;
        },
    },
});

export const {start,stop,reset,tick}=stopwatchSlice.actions;
export default stopwatchSlice.reducer;
