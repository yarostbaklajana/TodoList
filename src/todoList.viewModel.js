import * as ko from 'knockout';
import {Todo} from './todo.model.js';

export class ViewModel {
    constructor() {
        this.todoList = ko.observableArray([]);        
        this.inputText = ko.observable("");
    }

    toggleChecking(todo) {
        todo.checked(!todo.checked());
    }

    addNewTodo(todo, event) {
        if(event.keyCode === 13) {
            const text = this.inputText();
            const todo = new Todo(text);            
            this.todoList.unshift(todo);                
            this.inputText("");
        }        
    }
}
