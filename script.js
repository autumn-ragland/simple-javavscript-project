var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

//return length of task input box
function inputLength(){
    return input.value.length;
}

//create and manipulate a task
function createTask() {
    
    //create user input task, add to unordered list, clear user input
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    //mark a task as complete by toggling the "done" CSS class properties on click
    function completeTask() {
        li.classList.toggle("done");
    }
    li.addEventListener("click",completeTask);

    //add a button to each task to remove it from the list by toggling the "delete" CSS class properties on click
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("remove"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    function deleteListItem(){
        li.classList.add("delete")
    }
}

//create a task if there is something in the input box
function addListAfterClick(){
    if (inputLength() > 0) {
        createTask();
    }
}
enterButton.addEventListener("click",addListAfterClick);

//create a task if there is something in the input box and the user presses "enter"
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which ===13) {
        createTask();
    }
}
input.addEventListener("keypress", addListAfterKeypress);