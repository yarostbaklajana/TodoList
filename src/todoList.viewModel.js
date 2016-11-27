import * as ko from 'knockout';
import {Todo} from './todo.model.js';

export class ViewModel {
    constructor() {
        this.todoList = ko.observableArray();        
        this.inputText = ko.observable("");
    }

    toggleChecking(todo) {
        todo.checked(!todo.checked());
    }

    handleKeyUp(todo, event) {
        const ENTER_KEY_CODE = 13;
        const ESCAPE_KEY_CODE = 27;
        if(event.keyCode === ENTER_KEY_CODE && this.inputText()) {
            const text = this.inputText();
            const todo = new Todo(text);            
            this.todoList.unshift(todo);                
            this.inputText('');
        } 

        if (event.keyCode === ESCAPE_KEY_CODE) {
            this.inputText('');
        }       
    }
}
