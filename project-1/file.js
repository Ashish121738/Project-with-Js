const arr=["Dream big, start small, act now.",
  "Consistency beats motivation every time.",
  "Make progress, not excuses.",
  "Your future is built today.",
  "Small steps still move you forward.",
  "Discipline creates freedom.",
  "Stay patient and trust the process.",
  "Focus on becoming, not proving.",
  "Do it scared, but do it anyway.",
  "Growth begins outside comfort zones.",
  "Every expert was once a beginner.",
  "Work hard in silence, shine later.",
  "Success loves preparation.",
  "Energy flows where focus goes.",
  "Done is better than perfect.",
  "Keep showing up for yourself.",
  "Failure is part of the upgrade.",
  "Be stronger than your excuses.",
  "Late progress is still progress.",
  "The comeback is always personal."
]

const button=document.querySelector("button");
const text = document.querySelector("h1")

button.addEventListener("click",()=>{
    const index = Math.floor(Math.random()*20);
    text.textContent=arr[index];
})