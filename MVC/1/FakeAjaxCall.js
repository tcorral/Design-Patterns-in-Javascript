jQuery.ajax = function(oConfig) {
  switch (oConfig.url) {
    case "/todo-items/add":
      oConfig.success([
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
      oConfig.success([
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
      oConfig.success([
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
      oConfig.success([
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
};

