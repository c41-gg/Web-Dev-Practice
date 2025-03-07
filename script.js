const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');


let editToDo = null;

//Add Function
const addToDo = ()=> {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("Input a Task First");
    }else{
        if(addBtn.value=== "Edit"){
            editLocalToDos(editToDo.target.previousElementSibling.innerHTML);
            editToDo.target.previousElementSibling.innerHTML = inputText;
            addBtn.value = "Add";
            inputBox.value = "";
        }else{
            //Task Name
            const li= document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML= inputText;
            li.appendChild(p);

            //Edit Button
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            
            //Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);
            
            

            toDoList.appendChild(li);
            inputBox.value="";

            saveLocalToDos(inputText);

        }
    }  

}

//Edit Task Function
const updateToDo = (e) => {
    if(e.target.innerHTML === "Remove"){
        toDoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);

    }
    if(e.target.innerHTML =="Edit"){
        inputBox.value= e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editToDo = e;
    }
}


const saveLocalToDos=(toDo)=>{
    let toDos;
    if(localStorage.getItem("toDos") === null){
        toDos = [];
    }else{
        toDos = JSON.parse(localStorage.getItem("toDos"));
    }  
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos))
    console.log(localStorage.getItem("toDos"))
    console.log(JSON.parse(localStorage.getItem("toDos")));
}

const getLocalToDos  = () => {
    let toDos;
    if(localStorage.getItem("toDos") === null){
        toDos = [];
    }else{
        toDos = JSON.parse(localStorage.getItem("toDos"));
        toDos.forEach(toDo => {
            const li= document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML= toDo;
            li.appendChild(p);

            //Edit Button
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            
            //Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);          

            toDoList.appendChild(li);
        })
    }
}

const deleteLocalTodos = (toDo) => {
    let toDos;
    if(localStorage.getItem("toDos") === null){
        toDos = [];
    }else{
        toDos = JSON.parse(localStorage.getItem("toDos"));
    }  
    let toDoText = toDo.children[0].innerHTML
    let toDoIndex = toDos.indexOf(toDoText)
    toDos.splice(toDoIndex, 1)
    localStorage.setItem("toDos", JSON.stringify(toDos))
    console.log(toDoIndex);
}

const editLocalToDos = (toDo) =>{
    let toDos = JSON.parse(localStorage.getItem("toDos"));
    let toDoIndex = toDos.indexOf(toDo);
    toDos[toDoIndex] = inputBox.value;
    localStorage.setItem("toDos", JSON.stringify(toDos)); 
}

document.addEventListener('DOMContentLoaded', getLocalToDos)
addBtn.addEventListener('click',addToDo);
toDoList.addEventListener('click',updateToDo);