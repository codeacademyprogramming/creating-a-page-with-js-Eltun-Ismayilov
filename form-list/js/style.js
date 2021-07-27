const inputText=document.getElementById("txt") // input
const myButton=document.getElementById("btn-list") // button
const list=document.querySelector(".container ul") // ul

// bow string

myButton.addEventListener("click",()=>{
    if (inputText.value == "") {
        alert("Zehmet olmasa bos saxlamiyin ")
    }
})

myButton.addEventListener("click",(e)=>{
    if(inputText.value != ""){

        e.preventDefault();

        // creati li

        const myLi=document.createElement("li")
        myLi.innerHTML=inputText.value;
        list.appendChild(myLi);

        // creat close

        const xSpan=document.createElement("span");
        xSpan.innerHTML="x"
        myLi.appendChild(xSpan);

        // // creat dell
        
        const xDel=document.createElement("pre");
        xDel.innerHTML="del"
        myLi.appendChild(xDel);




    }


    // x


    const close=document.getElementsByTagName("span")
    for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click",()=>{
        close[i].parentElement.style.display="none"
    })
        
    }


    // // del


    const del=document.getElementsByTagName("pre")
    for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click",()=>{

        del[i].parentElement.style.textDecoration="line-through"
        del[i].parentElement.style.textTransform="uppercase"

    })
        
    }
    
    inputText.value="";
})

