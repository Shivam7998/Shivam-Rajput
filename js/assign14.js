function checkFname(){
    var elmsg= document.getElementById('Ffeedback');
    if(this.value.length<10){

    elmsg.textContent="must be more then 10";
    }
    else{
        elmsg.textContent="";
    }
}

var elUserName= document.getElementById('Fname');
elUserName.onblur=checkFname;


function checkLname(){
    var elmsg= document.getElementById('Lfeedback');
    if(this.value.length<10){

    elmsg.textContent="must be more then 10";
    }
    else{
        elmsg.textContent="";
    }
}

var elUserName= document.getElementById('Lname');
elUserName.onblur=checkLname;

function checkemial(){
var eml= "@";
if(this.value.match(eml))
{
  eml.textContent="Valid email address!";
}
else
{
    elmsg.textContent="";
}
}

var elUserName= document.getElementById('UserID');
elUserName.onblur=checkLname;

function checkpass(){
    var elmsg= document.getElementById('Pfeedback');
    if(this.value.length<10){

    elmsg.textContent="must be more then 10";
    }
    else{
        elmsg.textContent="";
    }
}


var elUserName= document.getElementById('UserPass');
elUserName.onblur=checkpass;