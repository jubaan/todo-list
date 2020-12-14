let _id_count = 0;

export default class ListItem {
  constructor(content) { //createDate) {
    this.id = Date.now();
    this.content = content;
    this.completed = false;
  }

  render() { // eslint-disable-line
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input class="form-check-input me-1" type="checkbox" value="${this.content}">
            ${this.content}
          </div>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
  }
}
