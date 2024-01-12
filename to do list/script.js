const addButton = document.getElementById("add");
const list = document.getElementById("listContainer");
const deleteAllButton = document.getElementById("deleteAll");
const deleteCompleted = document.getElementById("deleteCompleted");
const deleteContainer = document.getElementById("deleteContainer");
const completedContainer = document.getElementById("completedContainer")
const clearCompleted = document.querySelector("#clearCompleted");
let idTask = 1;

const addTask = () => {
    const input = document.getElementById("inputTask");
    const taskText = input.value.trim();
    const randomStatus = "PENDING";

    if (!taskText) {
        alert("Escribe una tarea");
    } else {
        const task = {
            id: idTask,
            text: taskText,
            status: randomStatus 
        };
        taskCode(task);
        input.value = "";
        idTask++;
    };
};

const taskCode = (task) => {
    const newTask = document.createElement("div");
    newTask.classList.add("taskItem");

    newTask.innerHTML = `
            <div class="id">${task.id}</div>
            <div class="task">${task.text}</div>
            <div class="taskStatus">${task.status}</div>
            <button class="delete">Delete</button>
            <input class="checkboxTask" type="checkbox">
    `;

    list.appendChild(newTask);
};

addButton.addEventListener("click", addTask);

const checkList = () => {
    if (!list.querySelector(".taskItem")) {
        list.style.visibility = "hidden";
        deleteContainer.style.display = "none"
        idTask = 1;
    } else {
        list.style.visibility = "visible";
        deleteContainer.style.display = "flex"
    }

    if (!completedContainer.querySelector(".taskItem")) {
        completedContainer.style.visibility = "hidden"
    } else {
        completedContainer.style.visibility = "visible"
    }
};

const listObserver = new MutationObserver(checkList);
listObserver.observe(list, { childList: true });
listObserver.observe(completedContainer, { childList: true});

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.closest(".taskItem").remove();
    }; 
});

list.addEventListener("change", function (e) {
        let status = e.target.parentNode.querySelector(".taskStatus");
        if (e.target.checked && status.textContent === "PENDING") {
            status.textContent = "COMPLETE";
        }
        if (!e.target.checked && status.textContent === "COMPLETE") {
            e.target.checked = false;
            status.textContent = "PENDING";
        }
});

deleteAllButton.addEventListener("click",()=> {
    list.innerHTML = `
    <h3>Task List</h3>
    <div class="headerList">
        <div class="idHeader">ID</div>
        <div class="idTask">TASK</div>
        <div class="idStatus">STATUS</div>
    </div>
    `;
});



deleteCompleted.addEventListener("click",()=> {
    const allTask = document.querySelectorAll(".taskItem");

    allTask.forEach(task => {
        const status = task.querySelector(".taskStatus")
        if (status.textContent === "COMPLETE") {
            const check = task.querySelector(".checkboxTask");
            const deleteButton = task.querySelector(".delete");
            deleteButton.remove();
            check.remove();
            completedContainer.appendChild(task);
        }
    });
});

clearCompleted.addEventListener("click",()=> {
    const allTaks = completedContainer.querySelectorAll(".taskItem");
    allTaks.forEach(task => {
        task.remove();
    });
});
