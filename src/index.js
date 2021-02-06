import './main.css';
import renderTodoList from './todoList';

if (!localStorage.getItem('todos')) {
  const todos = [];

  todos.push({
    id: 1,
    title: 'First Todo',
    isDone: false,
    description: 'first todo description',
    created_at: new Date(),
    priority: 0,
    dueDate: new Date(),
  });

  todos.push({
    id: 1,
    title: 'Second Todo',
    isDone: true,
    description: 'second todo description',
    created_at: new Date(),
    priority: 0,
    dueDate: new Date(),
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}

renderTodoList();
