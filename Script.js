let signup_button = document.getElementById("signup_button");
let signin_button = document.getElementById("signin_button");
let name_field = document.getElementById("name_field");
let phone_number = document.getElementById("phone_number");
let title = document.getElementById("title");

signin_button.onclick = function(){
    name_field.style.maxHeight = "0";
    phone_number.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signup_button.classList.add("disable");
    signin_button.classList.remove("disable");
}

signup_button.onclick = function(){
    name_field.style.maxHeight = "60px";
    phone_number.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signup_button.classList.remove("disable");
    signin_button.classList.add("disable");
}