const themeToggle = document.getElementById("theme-toggle");

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
  applyTheme(!isDark);
});

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const emptyState = document.getElementById("empty-state");
const todoStats = document.getElementById("todo-stats");
const statsText = document.getElementById("stats-text");
const statsBadge = document.getElementById("stats-badge");

function updateStats() {
  const total = todoList.children.length;
  const completed = todoList.querySelectorAll(".completed").length;

  if (total === 0) {
    emptyState.hidden = false;
    todoStats.hidden = true;
  } else {
    emptyState.hidden = true;
    todoStats.hidden = false;
    statsText.textContent = `${completed} of ${total} completed`;
    statsBadge.textContent = `${total - completed} left`;
  }
}

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
  completeButton.textContent = "✓ Done";

  completeButton.addEventListener("click", () => {
    li.classList.toggle("completed");
    completeButton.textContent = li.classList.contains("completed")
      ? "↩ Undo"
      : "✓ Done";
    updateStats();
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "✕";
  deleteButton.setAttribute("aria-label", "Delete task");

  deleteButton.addEventListener("click", () => {
    li.classList.add("removing");
    li.addEventListener("animationend", () => {
      li.remove();
      updateStats();
    }, { once: true });
  });

  actions.appendChild(completeButton);
  actions.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(actions);
  todoList.appendChild(li);

  updateStats();
  todoInput.value = "";
  todoInput.focus();
});

updateStats();
