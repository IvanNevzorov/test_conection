export class Render {
  constructor(app) {
    this.todos = document.querySelector(".todos");
    this.app = app;
  }

  pushTodos(todos) {
    console.log("todos", todos);
    todos.forEach((element) => {
      //{id:'', title:'', completed:'', date:''}
      const div = document.createElement("div");
      const title = document.createElement("p");
      title.textContent = element.title;
      const date = document.createElement("p");
      date.textContent = element.date;

      const buttonSave = document.createElement("button");
      if (element.completed) {
        buttonSave.setAttribute("disabled", true);
      }
      buttonSave.textContent = "Выполнено";
      this.addSaveEvent(buttonSave);

      const buttonDelete = document.createElement("button");
      this.addDeleteEvent(buttonDelete, element.id);
      buttonDelete.textContent = "Удалить";

      div.appendChild(title);
      div.appendChild(date);
      div.appendChild(buttonSave);
      div.appendChild(buttonDelete);

      this.todos.appendChild(div);
    });
  }

  addSaveEvent(element) {}

  addDeleteEvent(element, id) {
    element.addEventListener("click", () => {
      this.app.someMethod(id);
    });
  }
}
