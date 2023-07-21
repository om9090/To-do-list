# To-do-list
A simple to-do list built with the help of HMTL, CSS and Javascript

#HTML Code 

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE-edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css">
        <title>JS Select HTML Elements</title>
    </head>
    <body>
        <div class="container">
            <div class="todo-app">
                <h2>To-do list <img src="icon.png"></h2>
                <div class="row">
                    <input type="text" id="input-box" placeholder="Add your text">
                    <button onclick="addTask()" >Add</button>
                </div>
                <ul id="list-container">
                    <!-- <li class="checked">Task1</li>
                    <li>Task2</li>
                    <li>Task3</li> -->
                </ul>
            </div>
        </div>

        <script src="./demo.js"> </script>
    </body>
</html>

#JS Code

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


#CSS Code

*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.container{
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #153677, #4e085f );
    padding: 10px;
}

.todo-app{
    width: 100%;
    max-width: 540px;
    background: #fff;
    margin: 100px auto 20px;
    padding: 40px 30px 70px;
    border-radius: 10px;
}

.todo-app h2{
    color: #002765;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.todo-app img{
    width: 30px;
    margin-left: 10px;
}

.row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #edeef0;
    border-radius: 30px;
    padding-left: 20px;
    margin-bottom: 25px;
}

input{
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    font-weight: 14px;
}
button{
    border: none;
    outline: none;
    padding: 16px 50px;
    background: #ff5945;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 40px;
}

ul li{
    list-style: none;
    font-size: 17px;
    padding: 12px 8px 12px 50px;
    user-select: none;
    cursor: pointer;
    position: relative;
}

ul li::before{
    content: '';
    position: absolute;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background-image: url(unchecked.png);
    background-size: cover ;
    background-position: center;
    top: 12px;
    left: 8px;

}

ul li.checked{
    color: #555;
    text-decoration: line-through;
}

ul li.checked::before{
    background-image: url(checked.png);
}

ul li span{
    position: absolute;
    right: 0;
    top: 5px;
    width: 40px;
    height: 40px;
    font-size: 22px;
    color: #555;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
}

ul li span:hover{
    background: #edeef0;
}



