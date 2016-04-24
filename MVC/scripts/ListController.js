import $ from './jquery';

class ListController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.model
      .all()
      .then(
        items => {
          let html = '';

          items.forEach((item, index) => {
            let className = item.done ? 'done' : 'todo';
            html += `<li class="${className}" id="item_${index}">${item.text}</li>`;
          });

          this.view.innerHTML = html;
          $(this.view).on('click', '.todo', event => {
            var element = event.target;
            this.model
              .completeItem(element.id)
              .then(
                () => {
                  element.className = 'done';
                }
              );
          }).on('click', '.done', event => {
            var element = event.target;
            this.model
              .undoItem(element.id)
              .then(() => {
                element.className = 'todo';
              })
          });
        },
        error => {
          this.handleError('Server failed to get todo items', error);
        }
      );
  }

  handleError(message) {
    var className = 'error';
    this.view.innerHTML += `<li class="${className}">${message}</li>`;
  }
}

export default ListController;
