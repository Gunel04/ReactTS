import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";


const store = configureStore({
    reducer:{
        todo : todoSlice
    }
})



export type StoreRoot = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<StoreRoot> = useSelector;


export default store;