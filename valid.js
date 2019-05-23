function checkForm(){
    var flag = true;
    
    // validation
    var name = document.getElementById("name");
    
    
    var errMsg = "";
    
    if (name.value.length == 0){
        errMsg = "Requires at least one alphabet";
        
        var error = document.getElementById('error');
        
        error.innerHTML = errMsg;
       
        flag = false;
    }
    
    return flag;
}

