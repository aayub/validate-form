function validateForm(){
    removeMessage(); // to remove error message with each load
    var flag = true;
    
    // Variables
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirm_pw");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var street = document.getElementById("street");
    var city = document.getElementById("city");
    var postal = document.getElementById("postal");
    
    
    //---------------------------- Validation starts here:
    
    // FIRSTNAME:
    if (firstname.value.length==0){
        firstname.className = "wrong-input";
        // show error message
        
        firstname.nextElementSibling.innerHTML = "Required!";
        flag = false;
    } 
    
     // LASTNAME:
    if (lastname.value.length==0){
        lastname.className = "wrong-input";
        // show error message
         lastname.nextElementSibling.innerHTML = "Required!";
        flag = false;
    } 
    
    
    
    // USERNAME:
    // 6 characters and start with letter
    var uValid = /^[a-zA-Z]/;
    if (username.value.length<6 || !username.value.match(uValid)){
        username.className = "wrong-input";
        // show error message
         username.nextElementSibling.innerHTML = "Username should be atleast 6 characters long starting with a letter";
        flag = false;
    } 
    
    
    // PASSWORD:
    // 8 characters and start with letter
    var pValid = /^[a-zA-Z](?=.*[0-9])(?=.*[A-Z])/;
    if (password.value.length<8 || !password.value.match(pValid)){
        password.className = "wrong-input";
        // show error message
         password.nextElementSibling.innerHTML = "Passwords must be 8 characters starting with a letter, and contain atleast 1 digit and 1 uppercase letter";
        flag = false;
    } 
    
    
    // CONFIRM PASSWORD:
    // match password
    if (password.value != confirmpassword.value){
        confirmpassword.className = "wrong-input";
        // show error message
         confirmpassword.nextElementSibling.innerHTML = "Password does not match!";
        flag = false;
    } 
    
    // PHONE:
    // format pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    var nValid = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    if (!phone.value.match(nValid)){
        phone.className = "wrong-input";
        // show error message
         phone.nextElementSibling.innerHTML ="Please enter in the format: xxx-xxx-xxxx";
        flag = false;
    } else if (phone.value.length == 0){
        phone.className = "wrong-input";
        // show error message
         phone.nextElementSibling.innerHTML ="Required!";
        flag = false;
    }
    
    // EMAIL:
    // default
    var eValid = /[a-zA-Z0-9]@[a-zA-Z0-9]/;
    if (email.value.length == 0){
        email.className = "wrong-input";
        // show error message
         email.nextElementSibling.innerHTML ="Required!";
        flag = false;
    } else if(!email.value.match(eValid)){
        email.className = "wrong-input";
        // show error message
         email.nextElementSibling.innerHTML ="Wrong email structure";
        flag = false;
    }
    
    // STREET:
    // no validation required
    if (street.value.length == 0){
        street.className = "wrong-input";
        // show error message
         street.nextElementSibling.innerHTML ="Required!";
        flag = false;
    }
    
    
    // CITY:
    // no digits
    var cValid = /[0-9]/;
    if (city.value.match(cValid)){
        city.className = "wrong-input";
        // show error message
         city.nextElementSibling.innerHTML ="Enter a valid city!";
        flag = false;
    } else if (city.value.length == 0){
        city.className = "wrong-input";
        // show error message
         city.nextElementSibling.innerHTML ="Required!";
        flag = false;
        
    }
    
    // POSTAL:
    // 6 characters with space seperator
    var postalValid = /^[A-Za-z0-9]{3} [A-Za-z0-9]{3}$/;
    if (postal.value.length == 0){
        postal.className = "wrong-input";
        // show error message
        postal.nextElementSibling.innerHTML ="Required!"; 
        flag = false;
    } else if (!postal.value.match(postalValid)){
        postal.className = "wrong-input";
        // show error message
        postal.nextElementSibling.innerHTML ="Enter a valid postal code!"; 
        flag = false;
    }
    
    
    
    return flag;
}


// If user enters correct field, remove error message and red border
function removeMessage(){
    var errorinput = document.querySelectorAll(".wrong-input");
    
    [].forEach.call(errorinput, function(el){       el.classList.remove("wrong-input");
    });

var errorpara = document.querySelectorAll(".error");
[].forEach.call(errorpara, function(el){
                el.innerHTML = "";
    });

}
      
    
    