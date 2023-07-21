var inputBox = document.getElementById('input-box');
var list = document.getElementById('list-container');


// add item when we press enter

inputBox.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        addTask();
    }
})

//  main function which adds a task 


function addTask(){
    if(inputBox.value === ''){
        alert("Enter a valid task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    save();
}

// mark ckecked and unchecked

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); // if checked marks unchecked and vice cersa
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

// save value on the browser 

function save(){
    localStorage.setItem("data", list-CSSContainerRule.innerHTML);
}


function show(){
    list.innerHTML = localStorage.getItem("data");
}

show();