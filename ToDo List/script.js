// Variables
const textElem = document.querySelector(".text");
const addBtnElem = document.querySelector(".addBtn");
const TodocontainerElem = document.querySelector(".Todo-Container");
let todo = JSON.parse(localStorage.getItem("todo")) || [];
const dateElem = document.getElementById("Date");

// Clean up empty todos
todo = todo.filter(item => item.name.trim() !== "");


renderTodo();

// Add elements to the array after clicking the mouse
addBtnElem.addEventListener("click", function () {
    const newTodoName = textElem.value.trim();
    const newTodoDate = dateElem.value.trim();
    if (newTodoName) {
        const newTodo = {
            name: newTodoName,
            date: newTodoDate 
        };
        todo.push(newTodo);
        updateLocalStorage();
        renderTodo(); 
        //clears after clicking
        textElem.value = ""; 
        dateElem.value = "";
    }
});

// Add elements to the array after pressing Enter
textElem.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const newTodoName = textElem.value.trim();
        const newTodoDate = dateElem.value.trim();
        if (newTodoName) {
            const newTodo = {
                name: newTodoName,
                date: newTodoDate 
            };
            todo.push(newTodo);
            updateLocalStorage();
            renderTodo();
            //clears after clicking
            textElem.value = ""; 
            dateElem.value = "";
        }
    }
});

// Render
function renderTodo() {
    let html = "";

    
    const filteredTodos = todo.filter(item => item.name.trim() !== "");

    for (let i = 0; i < filteredTodos.length; i++) {
        const name = filteredTodos[i].name;
        const date = filteredTodos[i].date || "No date provided"; // Default message if date is empty
        html += `<div class="oneoftodos">
            <p class="pcontainer">${name} - <small>${date}</small></p>
            <button class="removebtn" onclick="removeTodo(${i})">Remove</button>
        </div>`;
    }

    TodocontainerElem.innerHTML = html;

    // Hide the container only if there are no valid todos
    if (filteredTodos.length === 0) {
        TodocontainerElem.style.display = "none";
    } else {
        TodocontainerElem.style.display = "block";
    }
}

// Remove ToDo item
function removeTodo(index) {
    todo.splice(index, 1); // Remove the item at the given index
    updateLocalStorage(); 
    renderTodo(); // Re-render the list
}

// Update localStorage
function updateLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo)); // Save the array as a JSON string
}
