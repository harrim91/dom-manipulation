// Get an element by ID
const root = document.getElementById("root");

// console.log(root);

// // Create lots of nodes
for (let i = 0; i < 2; i++) {
  //   // Create an element
  const p = document.createElement("p");

  //   // Create a text node
  const text = document.createTextNode("Hello World " + i);

  //   // Set an ID
  p.id = "p-" + i;

  //   // Add a class
  p.classList.add("paragraph");

  //   // Append the nodes to other nodes to insert them into the DOM in the right place!
  //   // Add the text as a child of the p element
  p.appendChild(text);

  //   // p isn't in the DOM yet, so need to append it to root (which is already in the DOM)
  root.appendChild(p);
}

// // Target elements by class
paragraphs = document.getElementsByClassName("paragraph");

// console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
  const para = paragraphs[i];
  console.log(para);

  //   // do some styling
  para.style.color = "red";

  //   // Change the text
  para.textContent = "This is different";
  para.textContent = para.textContent.toUpperCase();
}

// // ********************************

// // Set other attributes
// // Insert a plain input to the DOM
const input = document.createElement("input");
root.appendChild(input);

// // Change the input type
input.type = "number";

// // Change the placeholder
input.placeholder = "Insert a number";

// // Remove things
// // Remove the input by targeting it directly
// input.remove();

// // Remove children
root.removeChild(input);
