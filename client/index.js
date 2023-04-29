// Functionality for home page

// Adds a new toDo when button is clicked
const addToDo = () => {
  const searchBar = document.getElementById('new_toDo')
  // Current text when user types in a todo
  const toDotext = searchBar.value;
  // If user didn't type anything in, return
  if (toDotext === '') return;
  // Create a new div for the new todo
  const todo = document.createElement('div');
  todo.setAttribute('class', 'toDo')
  // Add a p element with the todotext
  const p = document.createElement('p');
  p.innerText = toDotext;
  // Add a button for deleting the text
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  // Add functionality for deleting toDo when button is clicked
  deleteButton.addEventListener('click', (e) => {
    // Grabs the toDo for the current button
    const currentToDo = e.target.parentNode;
    currentToDo.remove();
    
  })
  // Add new elements to div
  todo.appendChild(p)
  todo.appendChild(deleteButton);
  // Grab the todolist element and append all new elements
  document.querySelector('.toDoList_container').appendChild(todo);
  // reset toDo to an empty string
  searchBar.value = '';
}

