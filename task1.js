var inputField = document.getElementById("inputField")

inputField.addEventListener('keydown' , function(e){
    cirReady.style.backgroundColor = "#bbb"; 
    cirSteady.style.backgroundColor = "#bbb"; 
    cirGo.style.backgroundColor = "#bbb"; 
    readyText.innerHTML=" ";
    steadyText.innerHTML="";
    goText.innerHTML="" ; 

    if(e.key == "Enter"){
        if(inputField.value === "1"){
            cirReady.style.backgroundColor = "red";
            readyText.innerHTML = "Ready"
            readyText.style.color = 'red'
            

       
        }else if (inputField.value === "2"){
            cirSteady.style.backgroundColor = "yellow"; 
            steadyText.innerHTML = "Steady"
            steadyText.style.color = "yellow"
       
        }else if(inputField.value === "3"){
            cirGo.style.backgroundColor = "green"; 
            goText.innerHTML = "Go"
            goText.style.color = "green"
       
        }else {
            alert("Error!")
        }

    }
    inputField.value = "";
   
})
