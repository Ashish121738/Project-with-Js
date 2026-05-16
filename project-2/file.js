const parent=document.getElementById("parent");

parent.addEventListener("click",(e)=>{
    // document.body.style.backgroundColor=e.target.id
    // second way 
    const target = e.target;
    const body = document.querySelector("body")
    body.style.backgroundColor=target.id;
})
