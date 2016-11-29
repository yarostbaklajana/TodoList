import * as ko from 'knockout';

export class Todo {
    constructor(value, checked = false) {
        this.value = value;
        this.checked = ko.observable(checked);
        this.unchecked = ko.computed(() => !this.checked());
    }
}