class ListItem {
    constructor(title, description, dueDate, priority) {
        this.id = Date.now();
        return (
            title,
            description,
            dueDate,
            priority
        )
    }

    render() { // eslint-disable-line
        return (
        `<li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input class="form-check-input me-1" type="checkbox" value="${this.title}">
            ${this.title}
            </div>
            <i class="far fa-trash-alt delete"></i>
        </li>`
        )
    }
}

export default { ListItem }
