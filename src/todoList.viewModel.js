import * as ko from 'knockout';

class Todo {
    constructor(todo) {
        this.todo = todo;
    }
}

class ViewModel {
    constructor() {
        this.todoList = [new Todo("Try javaScript"), new Todo("Buy a Unicorn")]
    }
}

ko.applyBindings(new ViewModel());