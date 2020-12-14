export default class TodoList {
  render() {
    return `<div class="container border shadow mt-5 p-4 rounded">
    <header class="text-center text-dark my-4">
      <h1 class="mb-4">Todo List</h1>
      <form class="search">
        <input class="form-control" type="text" name="search"
        placeholder="Search ..." />
      </form>
    </header>

    <ul class="list-group list">
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input class="form-check-input me-1" type="checkbox" value="${this.content}">
            This an example            
          </div>
          <i class="far fa-trash-alt delete"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input class="form-check-input me-1" type="checkbox" value="${this.content}">
            Click on the trashcan button            
          </div>
          <i class="far fa-trash-alt delete"></i>
      </li>
    </ul>

    <form class="add text-center my-4">
      <label class="text-dark">Add a new activity...</label>
      <input class="form-control m-auto" type="text" name="item" placeholder="Add an item" />
    </form>
  </div>`;
  }
}
