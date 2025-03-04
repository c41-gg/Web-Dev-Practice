const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');




const addToDo = ()=> {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("Input a Task First");
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

const updateToDo = (e) => {
    console.log(e.target)
}



addBtn.addEventListener('click',addToDo);
toDoList.addEventListener('click',updateToDo);