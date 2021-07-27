let btn=document.getElementById("text")
let opens=document.getElementById("open")




btn.addEventListener("click",()=>{
    if (opens.style.display==="block") {
        opens.style.display="none"
        btn.style.background="#6d49cb"
        btn.style.color="white"
        
    }else{
        opens.style.display="block"
        btn.style.background="white"
        btn.style.color="black"
        
    }
})


    


const input=document.getElementById("input")

input.addEventListener("click",()=>{
    if (input.style.display==="block") {
        input.style.background="yellow"
        input.style.color="white"
        
    }else{
        input.style.display="block"
        input.style.background="white"
        input.style.color="black"
        
    }
})


const open2=document.getElementById("open2")
const open4=document.getElementById("open4")


open2.addEventListener("click",()=>{
    if (open4.style.display==="block") {
        open4.style.display="none"
        open2.style.background="#6d49cb"
        open2.style.color="black"
        
    }else{
        open4.style.display="block"
        open2.style.background="white"
        open2.style.color="black"
        
    }
})
   





let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement; 
 arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});







