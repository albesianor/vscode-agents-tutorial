const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) {
    return;
  }

  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.className = "complete-btn";
  completeButton.textContent = "Complete";

  completeButton.addEventListener("click", () => {
    li.classList.toggle("completed");
    completeButton.textContent = li.classList.contains("completed")
      ? "Undo"
      : "Complete";
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(completeButton);
  actions.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(actions);
  todoList.appendChild(li);

  todoInput.value = "";
  todoInput.focus();
});
