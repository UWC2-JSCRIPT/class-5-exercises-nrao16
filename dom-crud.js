// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const newAElement = document.createElement('a');
newAElement.setAttribute('id', 'cta');
const newText = document.createTextNode('Buy Now!');
newAElement.appendChild(newText);

const pElements = document.getElementsByTagName('p');
const lastP = pElements[pElements.length-1];
lastP.parentNode.appendChild(newAElement);


// Access (read) the data-color attribute of the <img>,
// log to the console
console.log(document.getElementsByTagName('img')[0].dataset.color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const liElement = document.getElementsByTagName('li')[2];
liElement.className = 'highlight'

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

lastP.parentNode.removeChild(lastP);
