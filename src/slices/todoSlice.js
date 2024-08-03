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
    filterStatus: 'all',
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
        },
        deleteTodo: (state, action) => {
            let localTodolist = [...state.todolist]; // Shallow copy
            localTodolist = localTodolist.filter(item => item.id !== action.payload.id);
            window.localStorage.setItem('todolist', JSON.stringify(localTodolist));
            let newState = { ...state, todolist: localTodolist }; // Shallow copy
            //console.log(newState);
            return newState;
        },
        updateTodo: (state, action) => {
            let localTodolist = [...state.todolist]; // Shallow copy
            localTodolist.forEach((item, index) => {
                if (item.id === action.payload.id) {
                    let currentItem = { ...item, title: action.payload.title, status: action.payload.status };
                    localTodolist[index] = currentItem;
                }
            });
            window.localStorage.setItem('todolist', JSON.stringify(localTodolist));
            let newState = { ...state, todolist: localTodolist }; // Shallow copy
            //console.log(newState);
            return newState;
        },
        updateFilter: (state, action) => {
            let newState = { ...state, filterStatus: action.payload.filter }; // Shallow copy
            return newState
        }
    }
})

export const { addTodo, deleteTodo, updateTodo, updateFilter } = todoSlice.actions;
export default todoSlice.reducer;