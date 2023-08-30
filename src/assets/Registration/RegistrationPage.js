function validateRegistrationForm(){
  let isFormValid = true;

   let isValidateFirstName = validateFirstName();
   let isValidateLastName = validateLastName();
   let isValidateEmail = validateEmail();
   let isValidateGender = validateGender();
    let isValidateDob= validateDob();
    let isValidatePhoneNumber =  validatePhoneNumber();
    let isValidateUploadImage =validateUploadImage();
    let isValidateAddress =validateAddress();


    if(isValidateFirstName && isValidateLastName && isValidateEmail && isValidateGender
         &&isValidateDob && isValidatePhoneNumber && isValidateUploadImage && isValidateAddress){
            isFormValid = true;
         }else{
            isFormValid = false;
         }
         ShowFinalValidation(isFormValid);
}

function validateFirstName(){
    let valid = true;
   if(document.getElementById("firstname").value == ""){
    document.getElementById("firstname").classList.add("border-red");
    valid = false
   }else{
    document.getElementById("firstname").classList.remove("border-red")
     valid =true;
   }
   return valid;
}

function validateLastName(){
    if(document.getElementById("lastname").value == ""){
     document.getElementById("lastname").classList.add("border-red")
    }else{
     document.getElementById("lastname").classList.remove("border-red")
 
    }
 }
 
function validateEmail(){
    if(document.getElementById("email").value == ""){
     document.getElementById("email").classList.add("border-red")
    }else{
     document.getElementById("email").classList.remove("border-red")
 
    }
 }
 function validateGender(){
    let genderElement= document.getElementsByName("gender")
    if(genderElement[0].checked == false && genderElement[1].checked == false){
     document.getElementById("gender").classList.add("display-block");
     document.getElementById("gender").classList.remove("display-none");

    }else{
     document.getElementById("gender").classList.remove("display-block");
     document.getElementById("gender").classList.add("display-none");

 
    }
 }
 
 
function validateDob(){
    if(document.getElementById("dob").value == ""){
     document.getElementById("dob").classList.add("border-red")
    }else{
     document.getElementById("dob").classList.remove("border-red")
 
    }
 }
 
function validatePhoneNumber(){
    if(document.getElementById("phonenumber").value == ""){
     document.getElementById("phonenumber").classList.add("border-red")
    }else{
     document.getElementById("phonenumber").classList.remove("border-red")
 
    }
 }
 
function validateUploadImage(){
    if(document.getElementById("uploadimage").value == ""){
     document.getElementById("uploadimage").classList.add("border-red")
    }else{
     document.getElementById("uploadimage").classList.remove("border-red")
 
    }
 }
 
function validateAddress(){
    if(document.getElementById("address").value == ""){
     document.getElementById("address").classList.add("border-red")
    }else{
     document.getElementById("address").classList.remove("border-red")
 
    }
 }
 function ShowFinalValidation(isFormValid){
   
    if(isFormValid == true){
     document.getElementById("finalvalidation").classList.add("display-block");
     document.getElementById("finalvalidation").classList.remove("display-none");

    }else{
     document.getElementById("finalvalidation").classList.remove("display-block");
     document.getElementById("finalvalidation").classList.add("display-none");

 
    }
 }
//  function printScreen(){
//      window.print();
//  }
    
 