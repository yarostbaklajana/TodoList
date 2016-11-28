import * as ko from 'knockout';
import {Todo} from './todo.model.js';

const DISPLAY_MODS = {
            all: 'all',
            active: 'active',
            completed: 'completed'
}

export class ViewModel {
    constructor() {         
        this.todoList = ko.observableArray();        
        this.inputText = ko.observable('');
        this.itemsLeftCount = ko.computed(() => this.todoList().filter((element) => !element.checked()).length); 
        this.itemsLeftText = ko.computed(this.getItemsLeftText, this);
        this.currentMode = ko.observable(DISPLAY_MODS.all);
        this.displayedListOfTodos = ko.computed(this.getDisplayedTodos, this);                
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

    getItemsLeftText() {
        let count = this.itemsLeftCount();
        const ext = count === 1 ? '' : 's';

        return `${count} item${ext} left`;
    }

    getDisplayedTodos() {
        const current = this.currentMode();

        if (current === 'all') {
            return this.todoList();
        }

        if (current === 'active') {
            return this.todoList().filter((todo) => !todo.checked());
        }

        if (current === 'completed') {
            return this.todoList().filter((todo) => todo.checked());
        }
    }

    switchModeDisplayingAllItems() {
        this.currentMode(DISPLAY_MODS.all);
    }

    switchModeDisplayingActiveItems() {
        this.currentMode(DISPLAY_MODS.active);
    }

    switchModeDisplayingCompletedItems() {
        this.currentMode(DISPLAY_MODS.completed);
    }
}
