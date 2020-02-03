document.getElementById("name").addEventListener("blur",validateName);
document.getElementById("surname").addEventListener("blur",validateSurname);
document.getElementById("email").addEventListener("blur",validateEmail);
document.getElementById("phone").addEventListener("blur",validatePhone);
document.getElementById("password1").addEventListener("blur",validatePassword1);
document.getElementById("password2").addEventListener("blur",validatePassword2);



function onSubmit (){
    if (
    validateName() &&
    validateSurname() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword1() &&
    validatePassword2()
    ){
        return true;
    } else {
        return false;
    }
}

function validateName() {
    var nameInput = document.getElementById("name").value;

    if(nameInput.length < 3){
        document.getElementById("name1").innerHTML="name must has atleast 3 charecters";
        document.getElementById("name2").innerHTML=""
        return false;
    }else{
        document.getElementById("name1").innerHTML="";
        document.getElementById("name2").innerHTML="correct";
        return true;
    }
    
    
}

function validateSurname() {
    var nameInput = document.getElementById("surname").value;

    if(nameInput.length < 5){
        document.getElementById("surname1").innerHTML="name must has atleast 5 charecters";
        document.getElementById("surname2").innerHTML=""
        return false;
    }else{
        document.getElementById("surname1").innerHTML="";
        document.getElementById("surname2").innerHTML="correct";
        return true;
    }


}

function validateEmail(){
    var emailInput = document.getElementById("email").value;
    let validator = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if( emailInput.length == 0 || !(validator.test(emailInput))){
        document.getElementById("email1").innerHTML="email not valid";
        document.getElementById("email2").innerHTML="";
        return false;
    }else{
        document.getElementById("email1").innerHTML="";
        document.getElementById("email2").innerHTML="correct";
        return true;
    }
}

function validatePhone(){
    var phone = document.getElementById("phone").value;
    let validator = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;

    if(phone.length == 0 || !(validator.test(phone))){
        document.getElementById("phone1").innerHTML="phone not valid";
        document.getElementById("phone2").innerHTML="";
        return false;
    }else{
        document.getElementById("phone1").innerHTML="";
        document.getElementById("phone2").innerHTML="correct";
        return true;
    }
}

function validatePassword1(){
    var password1 = document.getElementById("password1").value;
    let validator = /^(?=.*[0-9])(?=.{6,})/;

    if(password1.length == 0 || !(validator.test(password1))){
        document.getElementById("psswd1a").innerHTML="Password mus has at least 6 digits and 1 alphabetical character";
        document.getElementById("psswd1b").innerHTML="";
        return false;
    }else{
        document.getElementById("psswd1a").innerHTML="";
        document.getElementById("psswd1b").innerHTML="correct";
        return true;
    }

}

function validatePassword2(){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if(password1.length == 0){
        document.getElementById("psswd2a").innerHTML="Password can not be empty";
        document.getElementById("psswd2b").innerHTML="";
        return false;
    }else{
        document.getElementById("psswd2a").innerHTML="";
        
    }

    if(password2 != password1 ){
        document.getElementById("psswd2a").innerHTML="password does not match";
        document.getElementById("psswd2b").innerHTML="";
        return false;
    }else{
        document.getElementById("psswd2a").innerHTML="";
        document.getElementById("psswd2b").innerHTML="correct";
        return true;
    }

}


function onLoad(){
   
    document.getElementById("titleDone").innerHTML = "Your account has been successfully created " ;
}

