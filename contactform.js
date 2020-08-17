function validate(){
    var fname = document.forms["myForm"]["fname"];
    var lname = document.forms["myForm"]["lname"];
    var male = document.forms["myForm"]["male"];
    var female = document.forms["myForm"]["female"];
    var message = document.forms["myForm"]["comments"];
    var banner = document.getElementById("ty");
    var text = document.getElementById("text");
    if (fname.value.length < 3) {
        fname.style.border= "1px solid red";
        alert("First name must be filled out");
        return false;
    }
    else{
        fname.style.border= "1px solid black";
    }
    if (lname.value.length < 3) {
        lname.style.border= "1px solid red";
        alert("Last name must be filled out");
        return false;
    }
    else{
        lname.style.border= "1px solid black";
    }
    if(!(male.checked || female.checked)){
        alert("Please select your gender");
        return false;
    }
    if(message.value.length < 3) {
        message.style.border= "1px solid red";
        alert("Please leave a message");
        return false;
    }
    else{
        message.style.border= "1px solid black";
    }
    text.innerHTML="Thank you for contacting us, " + fname.value;
    banner.style.display = "block";
}