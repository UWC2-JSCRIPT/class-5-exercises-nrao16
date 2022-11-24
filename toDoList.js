
// single event handler on the body level to handle both Delete and Done toggle actions
const listItemEventHandler = function (e) {
  e.preventDefault();

  // If an li element is clicked, toggle the class "done" on the <li>
  if (e.target.nodeName === "SPAN") {
    e.target.parentNode.classList.toggle("done");
  }
  // If a delete link is clicked, delete the li element / remove from the DOM
  else if (e.target.className === "delete") {
    e.target.parentNode.remove();
  }
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function (e) {
  e.preventDefault();

  // Only add to list if Add link was clicked or enter key 
  if( e.type !== "click" && e.key !== 'Enter') { return;}

  const input = this.parentNode.getElementsByTagName('input')[0];
  const toDoText = input.value; // use this text to create a new <li>

  // Finish function here
  // new list element
  const liElement = document.createElement('li');

  // Create and add span element with given list item text
  const spanElement = document.createElement('span');
  spanElement.innerHTML = toDoText;
  liElement.appendChild(spanElement);

  // Create and add Delete link to the list
  const aElement = document.createElement('a');
  aElement.className = "delete";
  aElement.innerText = "Delete";
  liElement.appendChild(aElement);

  // Add new list item to the to do list
  const toDoList = document.querySelector('.today-list');
  toDoList.appendChild(liElement);
};

// Add event handler to the Add button 
const addButton = document.querySelector(".add-item");
addButton.addEventListener('click', addListItem);
// Add event handler to the Enter key
document.getElementsByTagName('input')[0].addEventListener('keyup', addListItem);

// Add a global event handler for delete and toggle events
document.body.addEventListener("click", listItemEventHandler);
