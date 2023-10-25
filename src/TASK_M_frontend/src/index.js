const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");

addButton.addEventListener("click", addTodo);
clearButton.addEventListener("click", clearCompleted);
function addTodo() {
    const description = todoInput.value.trim();
    if (description === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = description;
    todoList.appendChild(listItem);
    todoInput.value = "";
}

function clearCompleted() {
    const completedItems = Array.from(todoList.getElementsByTagName("li"));
    completedItems.forEach(item => {
        if (item) {
            item.remove();
        }
    });
}
