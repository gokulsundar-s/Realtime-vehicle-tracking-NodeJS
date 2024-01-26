function validate()                                   
{
    var n1 = document.forms["signupform"]["name"]; 
	var n2 = document.forms["signupform"]["pass"]; 

    if(n1.value=="admin" && n2.value=="password"){
        window.open('admin.html');
    }

    else if(n1.value=="user" && n2.value=="password"){
        window.open('server_user.html')
    }

    else{
        window.alert('Wrong Login ID or Password..!');
    }

}