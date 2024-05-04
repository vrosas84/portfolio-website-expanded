//TypedJS code
var typed = new Typed('#heroTyped', {
  strings: ['Supporter.','Coder.','Learner.','Leader.'],
  typeSpeed:75,
  backSpeed:20,
  loop:true,
});
//Exponent incrementer
let valueNumbers=document.querySelectorAll(".exp-number");
let interval= 750;
valueNumbers.forEach((valueNumber)=>{
    let startValue=0;
    let endValue=parseInt(valueNumber.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(()=>{
        startValue+=1;
        valueNumber.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration)
});

//HTML Dialog Modal Buttons
//Outcome Selectors
const outcomeone = document.getElementById("outcomeone");
const outcometwo = document.getElementById("outcometwo");
const outcomethree = document.getElementById("outcomethree");
const outcomefour = document.getElementById("outcomefour");
const outcomefive = document.getElementById("outcomefive");
const outcomesix = document.getElementById("outcomesix");

//Dialog Selector
const dialogone = document.getElementById("projectone");
const dialogtwo = document.getElementById("projecttwo");
const dialogthree = document.getElementById("projectthree");
const dialogfour = document.getElementById("projectfour");
const dialogfive = document.getElementById("projectfive");
const dialogsix = document.getElementById("projectsix");

//Cancel Button
const cancelone = document.getElementById("cancelone");
const canceltwo = document.getElementById("canceltwo");
const cancelthree = document.getElementById("cancelthree");
const cancelfour = document.getElementById("cancelfour");
const cancelfive = document.getElementById("cancelfive");
const cancelsix = document.getElementById("cancelsix");

//Opens a modal dialog for outcome one
outcomeone.addEventListener("click", () => {
  dialogone.showModal();
});
//Opens a modal dialog for outcome two
outcometwo.addEventListener("click", () => {
  dialogtwo.showModal();
});
//Opens a modal dialog for outcome three
outcomethree.addEventListener("click", () => {
  dialogthree.showModal();
});
//Opens a modal dialog for outcome four
outcomefour.addEventListener("click", () => {
  dialogfour.showModal();
});
//Opens a modal dialog for outcome five
outcomefive.addEventListener("click", () => {
  dialogfive.showModal();
});
//Opens a modal dialog for outcome six
outcomesix.addEventListener("click", () => {
  dialogsix.showModal();
});

// Form cancel button closes the dialogone box
cancelone.addEventListener("click", () => {
  dialogone.close("");
});
// Form cancel button closes the dialogtwo box
canceltwo.addEventListener("click", () => {
  dialogtwo.close("");
});
// Form cancel button closes the dialogthree box
cancelthree.addEventListener("click", () => {
  dialogthree.close("");
});
// Form cancel button closes the dialogfour box
cancelfour.addEventListener("click", () => {
  dialogfour.close("");
});
// Form cancel button closes the dialogfive box
cancelfive.addEventListener("click", () => {
  dialogfive.close("");
});
// Form cancel button closes the dialogsix box
cancelsix.addEventListener("click", () => {
  dialogsix.close("");
});