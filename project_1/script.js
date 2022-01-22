// retriving elements from dom methods
const form=document.getElementById("form");
const username=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmpassword");



function showError(input,message){
   mainDivParent=input.parentElement
   mainDivParent.className="formControl error";
    small=mainDivParent.querySelector("small")
    small.innerText=message;
   
}

function showSuccess(input){
mainDivParent=input.parentElement
mainDivParent.className="formControl success"
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