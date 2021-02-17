var inputField = document.getElementById("inputText");
var addToDoButton = document.getElementById("addToDobtn");

addToDoButton.addEventListener("click", hell);

function hell() {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    createDiv();
  }
}

function createDiv() {
  var divTag = document.createElement("div");
  divTag.id = "div1";
  divTag.setAttribute("align", "center");
  divTag.style.margin = "0px auto";
  divTag.className = "dynamicDiv";
  // divTag.innerHTML = listelement();
  document.body.appendChild(divTag);
  // createDiv.innerText = inputField.value;
  // var toDivData = document.getElementById("div1").innerHTML+=listData;
  // document.getElementById("div1").innerHTML+=listData;

  // List
  const list = document.createElement("li");
  const t = document.createTextNode(inputField.value);
  // list.innerText = inputField.value;
  inputField.value = "";
  list.appendChild(t);
  document.body.appendChild(list);
  divTag.appendChild(list);
  // button
  const editbutton = document.createElement("Button");
  const deletebtn = document.createElement("Button");
  editbutton.setAttribute("value", "Edit");
  deletebtn.setAttribute("type", "reset");
  editbutton.innerHTML = "Edit";
  deletebtn.innerHTML = "Delete";
  document.body.appendChild(editbutton);
  document.body.appendChild(deletebtn);
  list.appendChild(editbutton);
  divTag.appendChild(editbutton);
  divTag.appendChild(deletebtn);
  deletebtn.onclick = hello;
  editbutton.onclick = function () {
    var textareaEdit = document.createElement("textarea");
    console.log("fudduuuuuu");
    textareaEdit.appendChild(list);
  };

  function hello() {
    // remove this button and its input
    // list.remove(this.previousElementSibling);
    divTag.remove(this);
    console.log("hello");
  }

  // Add a "checked" symbol when clicking on a list item
  const taskList = document.querySelector("li");
  taskList.addEventListener(
    "click",
    function (ev) {
      if (ev.target === list) {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}
