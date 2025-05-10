import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type todoType = {
    id: string | number,
    text: string | void
}

const initialState: todoType[] = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action: PayloadAction) => {
            const newTodo: todoType = { id: crypto.randomUUID(), text: action.payload };
            state.push(newTodo);
        }
        // delete: (state, action)=> {

        // }
    }
})

export const {add} = todoSlice.actions;

export default todoSlice.reducer;