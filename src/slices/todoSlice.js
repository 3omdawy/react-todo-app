import { createSlice } from "@reduxjs/toolkit";

function getInitialTodos() {
    let localTodolist = window.localStorage.getItem('todolist');
    if (localTodolist) {
        return JSON.parse(localTodolist);
    }
    else {
        window.localStorage.setItem('todolist', JSON.stringify([]))
        return [];
    }
}

const initialValue = {
    todolist: getInitialTodos(),
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            let localTodolist = [...state.todolist]; // Shallow copy
            localTodolist.push(action.payload);
            window.localStorage.setItem('todolist', JSON.stringify(localTodolist));
            let newState = { ...state, todolist: localTodolist }; // Shallow copy
            //console.log(newState);
            return newState;
        }
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;