    
    //create variables to apply in function
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var number = "1234567890";
    var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    lCaseInput = document.getElementById("lowercase"),
    uCaseInput = document.getElementById("uppercase"),
    symbInput = document.getElementById("symbols"),
    numbInput = document.getElementById("numbers"),
    lengthInput = document.getElementById("length"),
    passwordFeild = document.getElementById("ps-field"),
    generateButton = document.getElementById("generate"),
    copyButton = document.getElementById("copy"),
    plength,
    userPassword,
    psCharset;

    //Generating a random password
    function generate(){
        userPassword = "";
        psCharset = "";
        //if statements for alertboxes
        if(confirm("uppercase")){
            psCharset += uppercase;
        }
        if(confirm("lowercase")){
            psCharset += lowercase;
        }
        if(confirm("number")){
            psCharset += number;
        }
        if(confirm("symbols")){
            psCharset += symbols;
        }
        plength = Number(lengthInput.value);

        //algorithm to generate random generated password based on characters
        for(let i = 0, i < plength; i++){
            userPassword += psCharset.charAt(Math.floor(Math.random() * psCharSet.length));
        }



    

    

    //var password ='';

    //var charactersLength = characters.length;

    //creating for loop to randomize and generate the characters
    //for(var i = 0; i < length; i++){
        //password += characters.charAt(Math.floor(Math.random()* characters.Length));
    }
    //document.getElementById("box").value = password;
    //return password;
}



