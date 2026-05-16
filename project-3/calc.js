const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();  // Prevent the default form submission behavior means it makes our stable result without refreshing the page

    const boy=document.getElementById("boy")
    const girl=document.getElementById("girl")

    const value1 = boy.value.length;    //come into string and calculate the length of the string and store it in value1 because it is key:value pair where ke name is boy and value is the length of the string which is entered by user in input field
    const value2 = girl.value.length

    const result = Math.pow(value1+value2,3)%101;

    const Result = document.querySelector("h2");

    Result.textContent = `Result:${result}%`

    form.reset();  // Reset the form after submission to clear the input fields for the next calculation


})