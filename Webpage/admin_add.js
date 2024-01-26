function validate(){
    var name = document.forms["signupform"]["name"]; 
	var pno = document.forms["signupform"]["pno"]; 
	var mail = document.forms["signupform"]["mail"]; 

    if(name.value == "" && pno.value == "" && mail.value == ""){
        window.alert("Some fields are empty..!");
    }

    else{
        
    }
}