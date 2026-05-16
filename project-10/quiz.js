const form = document.querySelector('form');
const answer={
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan",
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    // console.log(data);
    
    let scorevalue=0;
    for(let [question,value] of data.entries()){
        // console.log(question,value);
        
        if(answer[question]==value){
            scorevalue++;
        }
    }
    document.querySelector("#result").textContent =`Your score is ${scorevalue}/5`
    form.reset();
})