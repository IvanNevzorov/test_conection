import { Render } from "./Render";
import { Request } from "./Request";

export class App {
  constructor() {
    this.todos = [];
    this.render = new Render(this);
    this.request = new Request();
  }

  loadTodos() {
    this.request
      .getTodos()
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos = data;
        this.renderTodos(this.todos);
      });
  }

  renderTodos() {
    this.render.pushTodos(this.todos);
  }

  addTodo(todo) {
    todo.id = this.todos.length + 1;
    this.request
      .postTodo(todo)
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos.push(data);
        this.renderTodos();
      });
  }
}

// const app = {}
// app.todos= []
// app.render = new Render(app)
// app.request= new Request();
