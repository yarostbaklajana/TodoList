import * as ko from 'knockout';
import { Todo } from './todo.model.js';

export const todosRepository = {
    repository: window.localStorage,

    load() {
        let list = JSON.parse(this.repository.getItem('todoList')) || [] ;
        return list;
    },

    save(uploadedList) {
        const list = ko.toJS(uploadedList);
        this.repository.setItem('todoList', JSON.stringify(list));
    }
}
