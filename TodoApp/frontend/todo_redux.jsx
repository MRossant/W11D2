import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store'
import { receiveTodos, receiveTodo, removeTodo, fetchTodos, createTodo } from './actions/todos_actions'
import { receiveSteps, receiveStep, removeStep} from './actions/step_actions'
import Root from "./components/root"
import {allTodos} from "./reducers/selectors"


document.addEventListener("DOMContentLoaded", ()=> {
    const content = document.getElementById('content');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, content);
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
    window.allTodos = allTodos;
    window.fetchTodos = fetchTodos;
    window.createTodo = createTodo;

})

const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, { id: 2, title: 'hi', body: 'hi', done: false }];
const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }, { id: 2, title:"hello", done: false, todo_id: 2}];
