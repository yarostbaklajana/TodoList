import * as ko from 'knockout';
import { Todo } from './todo.model.js';

export const todosRepository = {
    load() {
        console.log(window.localStorage);
        let list = JSON.parse(localStorage.getItem('todoList'));

        return list === null ? [] : list.map((todo) => new Todo(todo.value, todo.checked)) ;
    },

    save(uploadedList) {
        const list = ko.toJS(uploadedList);
        localStorage.setItem('todoList', JSON.stringify(list));
    }
}