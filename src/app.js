import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles.scss';
import './todoList.viewModel.js';
import * as ko from 'knockout';
import {ViewModel} from './todoList.viewModel.js';
import { todosRepository } from './todosRepository.js';

const list = todosRepository.load();
ko.applyBindings(new ViewModel(list));
