import './main.css';
import TodoList from './todoList';
import addItem from './addItem';
import removeItem from './removeItem';
import searchItem from './searchItem';

const content = document.querySelector('.content');

content.innerHTML = new TodoList().render();

addItem();
removeItem();
searchItem();
