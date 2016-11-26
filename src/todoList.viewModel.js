import * as ko from 'knockout';

class Todo {
    constructor(value) {
        this.value = value;
        this.checked = ko.observable(false);
        this.unchecked = ko.computed(() => !this.checked());
    }


    
}

class ViewModel {
    constructor() {
        this.todoList = [new Todo("Try javaScript"), new Todo("Buy a Unicorn")]        
    }

    toggleChecking(todo) {
        todo.checked(!todo.checked());
    }
}

ko.applyBindings(new ViewModel());