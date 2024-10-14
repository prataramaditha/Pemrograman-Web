let taskList = [];

function addTask() {
  const taskInput = document.getElementById('todo-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    taskList.push(task);
    renderTasks();
    taskInput.value = ''; // Clear input after adding
  }
}

function renderTasks() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  taskList.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = task.completed ? 'completed' : '';

    listItem.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div>
        <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    todoList.appendChild(listItem);
  });
}

function deleteTask(id) {
  taskList = taskList.filter((task) => task.id !== id);
  renderTasks();
}

function editTask(id) {
  const task = taskList.find((task) => task.id === id);
  const listItem = document.querySelector(`li:nth-child(${taskList.indexOf(task) + 1})`);

  if (listItem) {
    listItem.classList.add('edit-mode');
    listItem.innerHTML = `
      <input type="text" value="${task.text}" class="edit-input" />
      <div>
        <button class="save-btn" onclick="saveTask(${task.id})">Save</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
  }
}

function saveTask(id) {
  const task = taskList.find((task) => task.id === id);
  const listItem = document.querySelector(`li:nth-child(${taskList.indexOf(task) + 1})`);
  const newText = listItem.querySelector('.edit-input').value.trim();

  if (newText) {
    task.text = newText;
    listItem.classList.remove('edit-mode');
    renderTasks();
  }
}
