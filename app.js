function preFormatter() {
    const code = document.querySelectorAll(".html");
    for (let i of code) {
    let x = i.innerHTML;
    x.replaceAll("<", "&lt;");
    x.replaceAll(">", "&gt;\n");
    i.textContent = x;
    }
    }
    preFormatter();


 // Model Js
const modelBtn = document.getElementById("modelBtn");
const modelBox = document.getElementById("model");
const closeBtn = document.getElementById("close");

modelBtn.addEventListener("click", showModel); 
closeBtn.addEventListener("click", closeModel);
 
function showModel(){
      modelBox.style.display = "block";
}
    
function closeModel() {
      modelBox.style.display = "none";
}
