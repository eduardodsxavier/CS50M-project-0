const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // add a new todo in the todo-list
    const todoName = prompt("todo name")
 
    if (!todoName) {
        return
    }

    const todo = document.createElement("li")
    const checkBox = document.createElement("input")
    const label = document.createElement("label")
    const button = document.createElement("button")

    label.innerHTML = todoName
    label.classList.add(classNames.TODO_TEXT)
    label.setAttribute("for", checkBox)

    checkBox.type = "checkbox"
    checkBox.classList.add(classNames.TODO_CHECKBOX)
    checkBox.setAttribute("onclick", "updateUncheckedCount(this)")

    button.innerHTML = "X"
    button.classList.add(classNames.TODO_DELETE)
    button.setAttribute("onclick", "deleteTodo(this)")

    todo.appendChild(checkBox)
    todo.appendChild(label)
    todo.appendChild(button)
    todo.classList.add(classNames.TODO_ITEM)

    list.appendChild(todo)

  // add one to itemCountSpan
    itemCountSpan.innerHTML++
    uncheckedCountSpan.innerHTML++
}

function updateUncheckedCount(checkBox) {
    if (checkBox.checked){
        uncheckedCountSpan.innerHTML--
    }
    else {
        uncheckedCountSpan.innerHTML++
    }
}

function deleteTodo(checkBox) { 
    if (!checkBox.parentNode.querySelector("input").checked) {
        uncheckedCountSpan.innerHTML--
    }

    itemCountSpan.innerHTML--

    checkBox.parentNode.remove()

}
