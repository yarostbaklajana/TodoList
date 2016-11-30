import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles.scss';
import './todoList.viewModel.js';
import * as ko from 'knockout';
import {ViewModel} from './todoList.viewModel.js';
import { todosRepository } from './todosRepository.js';
import * as pager from 'exports?pager!imports?$=jquery,ko=knockout!pagerjs';

const defaultLocation = "main";

const list = todosRepository.load();
const viewModel = new ViewModel(list);


pager.extendWithPage(viewModel);
ko.applyBindings(viewModel);

const current = window.location.hash;
if(!current) {
    pager.start(defaultLocation);
} else {
    pager.start();
}
