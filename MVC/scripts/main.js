import ListView from './ListView';
import TodoModel from './TodoModel';
import ListController from './ListController';

let oListView = new ListView(document.getElementById("results"));
let oTodoModel = new TodoModel();
let oListController = new ListController(oListView, oTodoModel);

oListController.init();
