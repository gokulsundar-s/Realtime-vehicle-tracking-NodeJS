function validate()                                   
{
    var n1 = document.forms["signupform"]["name"]; 
	var n2 = document.forms["signupform"]["email"]; 
	var n3 = document.forms["signupform"]["msg"]; 

	if(n1.value=="" && n2.value=="" && n3.value==""){
        window.alert("Some fields are empty");
    }

	else{
		Email.send({
			Host: "smtp.gmail.com",
			Username: "gokulsundars.21cse@kongu.edu",
			Password: "gokulsundars.21cse",
			To: 'bluebytessih@gmail.com',
			From: n2.value,
			Subject: n1.value,
			Body: n3.value,
		  })
			.then(function (message) {
			  alert("mail sent successfully")
			});
	}
}