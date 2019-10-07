var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
userPassword
pscharset;

function generate(){
    pscharset = "";
    userPassword = "";
    //prompt for alertboxes; choosing range from 8 to 128
    var password = prompt("Please enter the length of your password: ", "");
    if (password === 8 || password === 128){
    }
    else if(password < 8){ 
        alert("Must be 8 to 128 characters");
    }
    else if(password > 128){
        alert("Must be 8 to 128 characters");
    }

    //condition being set IF the user wants specific characters for password
    if(confirm("Would you like uppercase characters?")){
        pscharset += uppercase;
    }
    if(confirm("Would you like lowercase characters?")){
        pscharset += lowercase;
    }
    if(confirm("Would you like numbers?")){
        pscharset += number;
    }
    if(confirm("Would you like symbols/punctuations?")){
        pscharset += symbols;
    }

    //for loop to generate random password
    for(let i = 0; i < password; i++){
        userPassword += pscharset.charAt(Math.floor(Math.random() * pscharset.length));
    }
    //to populate textbox and return value
    document.getElementById("textbox").value = userPassword;
    return userPassword;

}

//copy to clipboard and create an alert
function copy(){

    document.getElementById("textbox").select();

    document.execCommand("copy");

    alert("Password copied to clipboard!");

}