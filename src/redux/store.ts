import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './Features/todoSlice';
import stopWatchReducer from "./Features/stopwatchSlice";

export const store=configureStore({
    reducer:{
        todo: todoReducer,
        stopwatch:stopWatchReducer,
    },
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;