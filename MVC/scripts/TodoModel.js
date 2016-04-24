import $ from './FakeAjaxCall';

class TodoModel {
  constructor() {
    this.items = [];
  }

  add(item) {
    return new Promise((resolve, reject) => {
      this.items.push({
        text: item,
        done: false,
        id: this.items.length
      });

      $.ajax({
          url: '/todo-items/add',
          type: 'POST'
        })
        .then(
          data => {
            resolve(data);
          },
          xhr => {
            reject({message: xhr.status + ": " + xhr.responseText});
          }
        );
    });
  }

  all() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/todo-items'
          })
          .then(
            data => {
              resolve(data);
            },
            xhr => {
              reject({message: xhr.status + ": " + xhr.responseText});
            }
          );
      }
    )
      ;
  }

  undoItem(id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/todo-items/undo',
        type: 'POST'
      })
      .then(
        data => {
          resolve(data);
        },
        xhr => {
          reject({message: xhr.status + ": " + xhr.responseText});
        }
      )
    });
  }

  completeItem(id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/todo-items/complete',
        type: 'POST'
      })
      .then(
        data => {
          resolve(data);
        },
        xhr => {
          reject({message: xhr.status + ": " + xhr.responseText});
        }
      )
    });
  }
}

export default TodoModel;
