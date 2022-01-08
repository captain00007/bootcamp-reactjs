const element = document.getElementById("main");

function addEvent() {
  const clientInput = document.getElementById("client-input");
  var elementCreated = document.createElement("Section");
  element.appendChild(elementCreated);
  var elementCreatedFirstChild = document.createElement("Input");
  elementCreated.appendChild(elementCreatedFirstChild);
  elementCreatedFirstChild.setAttribute("type", "checkbox");
  var elementCreatedLastChild = document.createElement("Span");
  elementCreated.appendChild(elementCreatedLastChild);
  elementCreatedLastChild.innerHTML = clientInput.value;
}
