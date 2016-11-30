import * as ko from 'knockout';
import { Todo } from './todo.model.js';

const localStorageItemName = 'todoList';

export const todosRepository = {
    load() {
        let list = JSON.parse(window.localStorage.getItem(localStorageItemName)) || [];
        return list.map((todo) => new Todo(todo.value, todo.checked));
    },

    save(uploadedList) {
        const list = ko.toJS(uploadedList);
        localStorage.setItem(localStorageItemName, JSON.stringify(list));
    }
}
