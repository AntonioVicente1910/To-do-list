document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "X";
            deleteBtn.classList.add('delete-btn');
            li.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            li.addEventListener('click', function () {
                li.classList.toggle('completed');
            });

            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});