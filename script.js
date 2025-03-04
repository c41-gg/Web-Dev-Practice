const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');


let editToDo = null;

const addToDo = ()=> {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("Input a Task First");
    }else{
        if(addBtn.value=== "Edit"){
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
        }
    }  

}

const updateToDo = (e) => {
    if(e.target.innerHTML === "Remove"){
        toDoList.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML =="Edit"){
        inputBox.value= e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editToDo = e;
    }
}



addBtn.addEventListener('click',addToDo);
toDoList.addEventListener('click',updateToDo);