const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

let toDos = [];
const TODOS_KEY = "todos";
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const target = event.target.parentElement;
  const id = target.id;
  target.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
  saveToDos();
}

function paintToDo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  list.id = newTodo.id;
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  list.appendChild(button);
  list.appendChild(span);
  toDoList.appendChild(list);
}

const handleSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
