//Находим элементы на странице и сохраняем в переменные для дальнейшего взаимодействия
const input = document.querySelector('.input')
const addBtn = document.querySelector('.add-task')
const noTasks = document.querySelector('.no-tasks')
const parentTaskList = document.querySelector('.task-list');
const clearBtn = document.querySelector('.clear-tasks')

//функция для создания списка задач
function addTask () {
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.textContent = input.value
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox')

    parentTaskList.append(li, checkbox)
}
addBtn.addEventListener('click', addTask)