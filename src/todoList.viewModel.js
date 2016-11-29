import * as ko from 'knockout';
import { Todo } from './todo.model.js';
import { todosRepository } from './todosRepository.js';

const DISPLAY_MODES = {
    get all() {
        return 'all';
    },

    get active() {
        return 'active';
    },

    get completed() {
        return 'completed';
    }
}

export class ViewModel {
    constructor(list) {
        this.toggleChecking = this.toggleChecking.bind(this);
        this.todoList = ko.observableArray(list);
        this.inputText = ko.observable('');
        this.itemsLeftCount = ko.computed(() => this.todoList().filter((element) => !element.checked()).length);
        this.itemsLeftText = ko.computed(this.getItemsLeftText, this);
        this.currentDisplayMode = ko.observable(DISPLAY_MODES.all);
        this.displayedListOfTodos = ko.computed(this.getDisplayedTodos, this);
    }



    toggleChecking(todo) {
        todo.checked(!todo.checked());
        this.saveState();
    }

    handleKeyUp(todo, event) {
        const ENTER_KEY_CODE = 13;
        const ESCAPE_KEY_CODE = 27;

        if (event.keyCode === ENTER_KEY_CODE && this.inputText()) {
            const text = this.inputText();
            const todo = new Todo(text);
            this.todoList.unshift(todo);
            this.inputText('');
            this.saveState();
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
        const current = this.currentDisplayMode();
        const todoItems = this.todoList();

        switch (current) {
            case DISPLAY_MODES.active:
                return todoItems.filter((todo) => !todo.checked());
            case DISPLAY_MODES.completed:
                return todoItems.filter((todo) => todo.checked());
            case DISPLAY_MODES.all:
            default:
                return todoItems;
        }
    }

    switchModeToAll() {
        this.currentDisplayMode(DISPLAY_MODES.all);
    }

    switchModeToActive() {
        this.currentDisplayMode(DISPLAY_MODES.active);
    }

    switchModeToCompleted() {
        this.currentDisplayMode(DISPLAY_MODES.completed);
    }

    clearCompletedTodos() {
        this.todoList(this.todoList().filter((todo) => !todo.checked()));
        this.saveState();
    }

    saveState() {
        todosRepository.save(this.todoList());
    }
}


