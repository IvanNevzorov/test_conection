export class Request {
  constructor() {
    this.url = "http://localhost:4000/api/todos/";
  }

  getTodos() {
    return fetch(this.url);
  }

  postTodo(body) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  putTodo() {
    return fetch(this.url);
  }

  deleteTodo(id) {
    return fetch(`${this.url}?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}
