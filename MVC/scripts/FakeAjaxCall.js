import $ from './jquery';

$.ajax =  function(config) {
  return new Promise((resolve, reject) => {
    switch (config.url) {
      case "/todo-items/add":
        resolve([
          {
            text: 'Test 1',
            done: false,
            id: 1
          },
          {
            text: 'Test 2',
            done: false,
            id: 2
          },
          {
            text: 'Test 3',
            done: true,
            id: 3
          }
        ]);
        break;
      case "/todo-items":
        resolve([
          {
            text: 'Test 1',
            done: false,
            id: 1
          },
          {
            text: 'Test 2',
            done: false,
            id: 2
          },
          {
            text: 'Test 3',
            done: true,
            id: 3
          }
        ]);
        break;
      case "/todo-items/undo":
        resolve([
          {
            text: 'Test 1',
            done: false,
            id: 1
          },
          {
            text: 'Test 2',
            done: false,
            id: 2
          },
          {
            text: 'Test 3',
            done: false,
            id: 3
          }
        ]);
        break;
      case "/todo-items/complete":
        resolve([
          {
            text: 'Test 1',
            done: true,
            id: 1
          },
          {
            text: 'Test 2',
            done: true,
            id: 2
          },
          {
            text: 'Test 3',
            done: true,
            id: 3
          }
        ]);
        break;
    }
  });
};

export default $;
