export default function () {
  const todosContainer = document.getElementById('todos-container');

  const todos = JSON.parse(localStorage.getItem('todos'));

  todos.forEach(todo => {
    console.log(todo);

    todosContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input class="form-check-input me-1" type="checkbox">
        ${todo.title}
      </div>
      <i data-id=${todo.id} class="far fa-trash-alt delete"></i>
    </li>`;
  });
}
