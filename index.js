

// sign up

var registerName = document.getElementById("registerName");
var registerEmail = document.getElementById("registerEmail");
var registerPassword = document.getElementById("registerPassword");
var alertRegister =  document.getElementById("alertRegister");
var successRegister = document.getElementById("successRegister");
var currentUser = "";
var users = [];
if(localStorage.getItem("users")!=null){
    users = JSON.parse(localStorage.getItem("users"))
}
if(document.getElementById("btn-register") != null)
{
    document.getElementById("btn-register").addEventListener("click",function(){
        if(registerName.value != "" && registerEmail.value != "" && registerPassword.value != ""){
            if(isEmailExists() == false){
                var user = {
                    name:registerName.value,
                    email:registerEmail.value,
                    password:registerPassword.value,
            
            
                }
                users.push(user);
                localStorage.setItem("users",JSON.stringify(users));
                console.log(users);
                alertRegister.classList.replace("d-block","d-none");
                successRegister.classList.replace("d-none", "d-block");
    
    
            }
    
         
        }
        else{
            // document.getElementById("alertRegister");
            alertRegister.innerHTML = "All Inputs is Required";
            alertRegister.classList.replace("d-none","d-block");
            successRegister.classList.replace("d-block", "d-none")
        }
        
    })
    function isEmailExists(){
        for(var i = 0; i<users.length; i++){
            if(users[i].email == registerEmail.value){
                alertRegister.innerHTML = "email already exists"
                alertRegister.classList.replace("d-none","d-block");
                return true;
            }
          
        }
        return false;
    }
}



// log in

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var alertLogin = document.getElementById("alertLogin");

if(document.getElementById("btn-login") != null){

    document.getElementById("btn-login").addEventListener("click",function(){
        if(loginEmail.value != "" && loginPassword.value != ""){
            var allUsers = JSON.parse(localStorage.getItem("users"))
            for( var i=0; i<allUsers.length; i++)
            {
                if(allUsers[i].email == loginEmail.value && allUsers[i].password == loginPassword.value){
                   localStorage.setItem("currentUser",allUsers[i].name)
                   location.href = "./home.html"
                   alertLogin.classList.replace("d-block","d-none")
                }

            }
            alertLogin.innerHTML = "Incorrect email and password"
            alertLogin.classList.replace("d-none","d-block")

        }else{
            alertLogin.innerHTML = "All Inputs Is Requried"
            alertLogin.classList.replace("d-none","d-block")
        }
       
    
    })
}

// home

var userName = document.getElementById("userName");
if(userName != null){
    userName.innerHTML = `Welcom ${localStorage.getItem("currentUser")}`
    document.getElementById("btn-logout").addEventListener("click", function(){
        localStorage.removeItem("currentUser")
    })
}

