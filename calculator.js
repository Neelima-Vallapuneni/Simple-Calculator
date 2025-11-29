let display = document.getElementById("text");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".special-chars");
let clearBtn = document.querySelector(".clear");
let equalBtn = document.querySelector(".equals button");
numbers.forEach(btn=>{
    btn.addEventListener("click",()=>{
        display.value+=btn.innerText;
    });
});
operators.forEach(btn=>{
    btn.addEventListener("click",() =>{
        display.value+=btn.innerText;
    });
});
clearBtn.addEventListener("click",()=>{
    display.value="";
});
equalBtn.addEventListener("click",()=>{
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
});
