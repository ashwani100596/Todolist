var inputField = document.getElementById("inputText");
var addToDoButton = document.getElementById("addToDobtn");
var ContainerList = document.getElementById("toDoContainer")

addToDoButton.addEventListener("click", hell);

function hell() {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    createDiv();
  }
}

function createDiv(event) {
  var divTag = document.createElement("div");
  // divTag.id = divI;
  divTag.setAttribute("align", "center");
  divTag.style.margin = "0px auto";
  // divTag.className = "list-group input-group-append;
  document.body.appendChild(divTag);

  // List generate
  const list = document.createElement("li");
  list.className = "list-group";
  const t = document.createTextNode(inputField.value);
  t.innerText = inputField.value;
  inputField.value = "";
  list.appendChild(t);
  document.body.appendChild(list);
  divTag.appendChild(list);

  // edit button
  const editbutton = document.createElement("Button");
  editbutton.className = "btn btn-success";
  editbutton.setAttribute("value", "Edit");
  editbutton.innerHTML = "Edit";
  document.body.appendChild(editbutton);
  list.appendChild(editbutton);
  divTag.appendChild(editbutton);
  editbutton.onclick = editTask;
  
  
  // function (inputField) {
  //   var editelement = document.createElement("input"); //input after editbutton click
  //   var savebtn = document.createElement("button")
  //   savebtn.innerText = "save";
  //   editelement.innerText = inputField;
  //   console.log("hello");
    
  // };

   // delete button
  const deletebtn = document.createElement("Button");
  deletebtn.className = "btn btn-success";
  deletebtn.setAttribute("type", "reset");
  deletebtn.innerHTML = "Delete";
  document.body.appendChild(deletebtn);
  divTag.appendChild(deletebtn);
  deletebtn.onclick = hello;
  function hello() {
    // remove this button and its input
    // list.remove(this.previousElementSibling);
    divTag.remove(this);
    console.log("hello");
  }

  // Add a "checked" symbol when clicking on a list item
  const taskList = document.querySelector("ul");
  taskList.addEventListener(
    "click",
    function (ev) {
      if (ev.target === list) {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
  ContainerList.appendChild(divTag);
  
}


var editTask=function(){
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");
  
  
  var list=this.parentNode;
  
  var editInput=list.querySelector('input[type=text]');
  // var label=list.querySelector("label");
  var containsClass=list.classList.contains("editMode");
      //If class of the parent is .editmode
      if(containsClass){
  
      //switch to .editmode
      //label becomes the inputs value.
        list.innerText=editInput.value;
      }else{
        editInput.value=list.innerText;
      }
  
      //toggle .editmode on the parent.
      list.classList.toggle("editMode");
    }