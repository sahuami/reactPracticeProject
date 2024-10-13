import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})

//configureStore: most of the case m object he lata hai nuh