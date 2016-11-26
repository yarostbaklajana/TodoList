import * as ko from 'knockout';

export class Todo {
    constructor(value) {
        this.value = value;
        this.checked = ko.observable(false);
        this.unchecked = ko.computed(() => !this.checked());
    }    
}