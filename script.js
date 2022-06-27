const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const button = document.getElementById("button");

button.addEventListener("click", function(){
    
    if(password.value != confirmPassword.value){
        password.style.backgroundColor = "red";
        confirmPassword.style.backgroundColor = "red";
    }

});


   

