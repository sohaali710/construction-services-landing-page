var myinput = document.getElementById('exampleInputName')
var myform = document.getElementById('myform')

function userNameValidate(input) {
	
	var text = input.value.trim() //to remove spaces
    if(text.length < 3)  {
        input.nextElementSibling.innerText = "Username must be 3 characters at least.";
    }
    else{
        input.nextElementSibling.innerText = "";
    }

}

function emailValidate(input) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var text = input.value.trim()
	
    if(emailPattern.test(text) == false) {
        input.nextElementSibling.innerText ="Please enter a valid email."
    } 
    else{
        input.nextElementSibling.innerText ="" 
    }
}

function passwordValidate(input) {
    
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	var text = input.value.trim()
	
    if(strongRegex.test(text) == false) {
        input.nextElementSibling.innerText = "Password must be 8 chars at least with at least 1 lower character, 1 uppercase character, 1 number and 1 special character."
    }
    else{
        input.nextElementSibling.innerText = ""
    }
}




myform.addEventListener('input' , function(e){
	
    switch(e.target.id){
        case "userName" : 
            userNameValidate(e.target)
        break;
        case "email" :
            emailValidate(e.target)
        break;
        case 'password':
            passwordValidate(e.target)
        break;
    }
})