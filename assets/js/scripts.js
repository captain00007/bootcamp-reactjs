const element = document.getElementById("main");

function addEvent() {
  const clientInput = document.getElementById("client-input");
  var elementCreated = document.createElement("Section");
  element.appendChild(elementCreated);
  var elementCreatedFirstChild = document.createElement("Input");
  elementCreated.appendChild(elementCreatedFirstChild);
  elementCreatedFirstChild.setAttribute("type", "checkbox");
  elementCreatedFirstChild.setAttribute("class", "checkbox-button");
  elementCreatedFirstChild.addEventListener("click", check);
  var elementCreatedLastChild = document.createElement("Span");
  elementCreated.appendChild(elementCreatedLastChild);
  elementCreatedLastChild.innerHTML = clientInput.value;
}

function check() {
  var checkboxButton = document.getElementsByClassName("checkbox-button");
  for (let i = 0; i < checkboxButton.length; i++) {
    if (checkboxButton[i].checked === true) {
      checkboxButton[i].nextSibling.setAttribute("class", "line-through");
    } else {
      checkboxButton[i].nextSibling.removeAttribute("class");
    }
  }
}
