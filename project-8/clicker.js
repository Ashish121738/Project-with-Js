const body = document.querySelector("body");
body.addEventListener("click",(e)=>{
    const circleelement = document.createElement('div');
    circleelement.classList.add("circle");
    const color = ["red","blue","green","yellow","orange","purple"];
    circleelement.style.backgroundColor = `${color[Math.floor(Math.random()*6)]}`
    const hiLanguages = [
  "Hello",        // English
  "Hola",         // Spanish
  "Bonjour",      // French
  "Hallo",        // German
  "Ciao",         // Italian
  "Namaste",      // Hindi
  "Konnichiwa",   // Japanese
  "Annyeong",     // Korean
  "Ni Hao",       // Chinese
  "Salaam",       // Arabic
  "Olá",          // Portuguese
  "Privet",       // Russian
  "Hej",          // Swedish
  "Ahoj",         // Czech
  "Merhaba",      // Turkish
  "Sawasdee",     // Thai
  "Xin Chào",     // Vietnamese
  "Jambo",        // Swahili
  "Halo",         // Indonesian
  "Shalom"        // Hebrew
];
    circleelement.textContent=hiLanguages[Math.floor(Math.random()*hiLanguages.length)]
    circleelement.style.top = `${e.clientY-25}px`
    circleelement.style.left = `${e.clientX-25}px`
    //we do -25px to center the circle on the click point, since the circle has a width and height of 50px and border-radius of 50% to make it a circle, the center of the circle is at (25px, 25px) from its top-left corner. and if we remove border radiu then we click then it start from the edge of the square and not the center of the square so we do -25px to center it on the click point.
    body.append(circleelement);
    setTimeout(()=>{
        circleelement.remove()
    },5000)
})