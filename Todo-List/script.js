// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Create todo element
const createTodoElement = (todo) => {
  const li = document.createElement("li");
  li.className = `todo-item ${todo.completed ? "completed" : ""}`;

  const span = document.createElement("span");
  span.textContent = todo.text;

  const btnDiv = document.createElement("div");

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.textContent = todo.completed ? "Undo" : "Complete";
  completeBtn.onclick = () => toggleTodo(todo.id);

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editTodo(todo.id);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => deleteTodo(todo.id);

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(btnDiv);

  return li;
};

// Add new todo
const addTodo = (e) => {
  e.preventDefault();

  const todoText = todoInput.value.trim();
  if (!todoText) return;

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(todo);
  saveTodos();
  renderTodos();

  todoInput.value = "";
};

// Toggle todo completion
const toggleTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  saveTodos();
  renderTodos();
};

// Edit todo
const editTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  const newText = prompt("Edit task:", todo.text);

  if (newText && newText.trim()) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText.trim() };
      }
      return todo;
    });

    saveTodos();
    renderTodos();
  }
};

// Delete todo
const deleteTodo = (id) => {
  if (confirm("Are you sure you want to delete this task?")) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodos();
  }
};

// Render todos
const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    todoList.appendChild(createTodoElement(todo));
  });
};

// Event Listeners
todoForm.addEventListener("submit", addTodo);

// Initial render
renderTodos();
