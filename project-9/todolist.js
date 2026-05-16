const form = document.querySelector('form');
const task = document.querySelector("#task")
const result = document.querySelector('#result');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text = task.value.trim();
    if(text == "")
        return;
    const parent = document.createElement("div");
    parent.style.marginTop="10px;"
    const work = document.createElement("span");
    work.textContent = text;
    work.style.marginRight="5px"
    const donebutton = document.createElement("button");
    donebutton.textContent = "Done";
    donebutton.style.marginRight="5px"
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    parent.append(work,donebutton,deletebutton);
    result.append(parent);

    donebutton.addEventListener("click",()=>{
        work.style.backgroundColor = "green";
        work.style.textDecoration = "line-through";
    })
    deletebutton.addEventListener("click",()=>{
        parent.remove();
    })

    task.value = "";
})
