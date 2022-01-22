// retriving elements from dom methods
const form=document.getElementById("form");
const username=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmpassword");


//function to show error
function showError(input,message){
   //getting parent elemnet "div of input"
   mainDivParent=input.parentElement
   // assigining new class name
   mainDivParent.className="formControl error";
   //retriving small element by queryselector
    small=mainDivParent.querySelector("small")
    small.innerText=message;
   
}


// function to show success
function showSuccess(input){
mainDivParent=input.parentElement
mainDivParent.className="formControl success"
}

function checkEmail(input){
   
   var re=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   return re.test(input.toLowerCase());
   ;
}



// adding an eventListner to form
form.addEventListener("submit",function(e){
    //stop from reloading
    e.preventDefault();

   if (username.value===""){
      showError(username, `${username.id} can't be empty`) 
   }
   else{
      showSuccess(username);
   }
    
    
   if (email.value===""){
      showError(email,`${email.id} can't be empty`)
   }
    else if(!checkEmail(email.value)){
        showError(email,"please provide valid email");
    }
   else{
      showSuccess(email);
   }
   
   if(password.value===""){
      showError(password,`${password.id} can't be empty`)
   }
   else{
      showSuccess(password);
   }

   if (confirmpassword.value===""){
     showError(confirmpassword,`${confirmpassword.id} can't be empty`)
   }
   else{
      showSuccess(confirmpassword)
   }

})