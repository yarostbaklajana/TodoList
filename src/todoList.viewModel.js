import * as ko from 'knockout';
import {Todo} from './todo.model.js';

export class ViewModel {
    constructor() {
        this.todoList = [new Todo("Try javaScript"), new Todo("Buy a Unicorn")]        
    }

    toggleChecking(todo) {
        todo.checked(!todo.checked());
    }
}
