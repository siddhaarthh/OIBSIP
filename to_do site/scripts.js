var text1 = "";
var text2 = "";
var input = "";


function saveText() {
  // Get the values of the two text areas
  // text1 = document.getElementById("title").value;
  // text2 = document.getElementById("description").value;


  // // Create a new div element to hold the output
  // var outputDiv = document.createElement("div");

  // // Create a new text node with the values of the two text areas
  // var outputText = document.createTextNode(text1 + "\n" + text2);

  // // Add the text node to the div element
  // outputDiv.appendChild(outputText);

  // // Add the div element to the output div on the HTML page
  // document.getElementById("prints").appendChild(outputDiv);
  var right=document.getElementById("right");
  var container=document.createElement("div");
  container.setAttribute("id","prints");

  var title=document.createElement("textarea");
  title.setAttribute("id","title_print");
  title.innerHTML= textarea.value;

  var dis=document.createElement("textarea");
  dis.setAttribute("id","desc_print");
  dis.innerHTML="this is testing discription"

  var del=document.createElement("button");
  del.setAttribute("id","delete_btn");

  container.appendChild(title);
  container.appendChild(dis);
  container.appendChild(del);

  right.appendChild(container);
}

function saveInput() {
  // Get the value of the input field
  var input = document.getElementById("title_print").value;

  // Create a new div element to hold the output
  var outputDiv = document.createElement("title_print");

  // Create a new text node with the value of the input field
  var outputText = document.createTextNode(input);

  // Add the text node to the div element
  outputDiv.appendChild(outputText);

  // Get the delete button element by ID
var deleteButton = document.getElementById("delete_btn");

// Add an event listener to the delete button
deleteButton.addEventListener("click",function() {
  // Get the parent element of the delete button (in this case, the div with ID "item1")
  var parent = this.parentNode;
  
  // Remove the parent element from the page
  parent.remove();
});


  // Add the div element to the output div on the HTML page
  document.getElementById("output").appendChild(outputDiv);

  
}
