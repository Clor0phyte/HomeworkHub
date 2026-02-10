let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");
let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", function() {
    if (confirm("Ви впевнені, що хочете очистити всі завдання?")) {
        list.innerHTML = "";
        saveTasks();
    }
});

function addTask(text) {
    let li = document.createElement("li");
    li.textContent = text;
    let div = document.createElement("div");
    div.className = "buttons";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
        saveTasks();
    });
    div.appendChild(checkbox);

    let delBtn = document.createElement("button");
        delBtn.textContent = "Видалити";

    delBtn.addEventListener("click", function() {
        li.remove();
        saveTasks();
    });

    let redact = document.createElement("Button");
        redact.textContent = "Редагувати"

        redact.addEventListener("click", function() {
            let newText = prompt("Введіть новий текст завдання:", li.firstChild.textContent);
                if (newText !== null && newText.trim() !== "") {
                li.firstChild.textContent = newText.trim();
                saveTasks();
        }
    });

    div.appendChild(redact);
    div.appendChild(delBtn);
    list.appendChild(li);
    li.appendChild(div);

}

addBtn.addEventListener("click", function() {
  let text = input.value.trim();
  if (text === "") {
    alert("Введіть завдання!");
    return;
  }
  addTask(text);
  input.value = "";
  saveTasks();
});

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task));
}


loadTasks(); 