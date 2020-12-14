import './main.css';
import todoList from './todoList';
import addItem from './addItem';
import removeItem from './removeItem';
import searchItem from './searchItem';

const content = document.querySelector('.content');

content.innerHTML = new todoList().render();

addItem();
removeItem();
searchItem();

