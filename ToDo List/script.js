const textElem = document.querySelector(".text");
const addBtnElem = document.querySelector(".addBtn");
const TodocontainerElem = document.querySelector(".Todo-Container");
let todo = [];

// Add event listener for the "Add" button
addBtnElem.addEventListener("click", function () {
    const newtodo = textElem.value.trim(); // Get and trim input
    if (newtodo) { // Ensure input is not empty
        todo.push(newtodo); // Add to the todo array
        renderTodo(); // Render updated todo list
        textElem.value = ""; // Clear the input field
    }
});

// Function to render the todo list
function renderTodo() {
    let html = ""; // Reset HTML content
    for (let i = 0; i < todo.length; i++) {
        html += `<div class="oneoftodos">
            <p class="pcontainer">${todo[i]}</p>
            <button class="removebtn" onclick="removeTodo(${i})">Remove</button>
        </div>`;
    }
    TodocontainerElem.innerHTML = html; // Update the container
}

// Function to remove a todo by index
function removeTodo(index) {
    todo.splice(index, 1); // Remove item from the array
    renderTodo(); // Re-render the todo list
}
