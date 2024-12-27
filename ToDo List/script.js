//variables
const textElem = document.querySelector(".text");
const addBtnElem = document.querySelector(".addBtn");
const TodocontainerElem = document.querySelector(".Todo-Container");
let todo = JSON.parse(localStorage.getItem("todo")) || []; //save in local storage

renderTodo();


//add elements in array after clicking on mouse
addBtnElem.addEventListener("click", function () {
    const newtodo = textElem.value.trim(); 
    if (newtodo) {
        todo.push(newtodo);
        updateLocalStorage();
        renderTodo();
        textElem.value = "";
    }
});

//add elements in array after clicking enter
textElem.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const newtodo = textElem.value.trim()
        if (newtodo) {
            todo.push(newtodo)
            updateLocalStorage()
            renderTodo()
            textElem.value = ""
        }
    }
});

//render ToDo list
function renderTodo() {
    let html = "";
    for (let i = 0; i < todo.length; i++) {
        html += `<div class="oneoftodos">
            <p class="pcontainer">${todo[i]}</p>
            <button class="removebtn" onclick="removeTodo(${i})">Remove</button>
        </div>`;
    }
    TodocontainerElem.innerHTML = html;
}

//remove button
function removeTodo(index) {
    todo.splice(index, 1); // Remove the todo at the given index
    updateLocalStorage(); // Save updated array to localStorage
    renderTodo(); // Re-render the updated list
}

function updateLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo)); // Save array as a JSON string
}
