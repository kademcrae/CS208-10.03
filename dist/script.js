
document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.getElementById("addBtn").addEventListener("click", addBtnClick);

    document.getElementById("taskInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });

    let buttons = document.querySelectorAll(".done-btn");

    for (let button of buttons) {
        button.addEventListener("click", removeTask);
    }
}

function addBtnClick() {
    let textbox = document.getElementById("taskInput");
    let task = textbox.value.trim();

    if (task !== "") {
        addTask(task);
        textbox.value = "";
    }

    textbox.focus();
}

function addTask(task) {
    let li = document.createElement("li");

    li.innerHTML = '<span class="task-text">' + task +
        '</span><button class="done-btn">&#10006;</button>';

    let ol = document.querySelector("ol");
    ol.appendChild(li);

    let buttons = document.querySelectorAll(".done-btn");
    buttons[buttons.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {
    let li = event.target.parentNode;
    li.parentNode.removeChild(li);
}
