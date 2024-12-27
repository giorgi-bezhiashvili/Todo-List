const textElem = document.querySelector(".text");
const addBtnElem = document.querySelector(".addBtn");
const TodocontainerElem = document.querySelector(".Todo-Container");
let todo = [];

addBtnElem.addEventListener("click", function () {
    const newtodo = textElem.value.trim(); // Get and trim input
    if (newtodo) { 
        todo.push(newtodo); 
        renderTodo(); 
        textElem.value = ""; 
    }
});

textElem.addEventListener("keydown" , function(){
    if (event.key === "Enter") {
        const newtodo = textElem.value.trim(); // Get and trim input
    if (newtodo) { 
        todo.push(newtodo); 
        renderTodo(); 
        textElem.value = ""; 
    }
    }
})

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

function removeTodo(index) {
    todo.splice(index, 1); 
    renderTodo(); 
}
