// WELCOME ALERT

window.onload = function(){

    alert("Welcome to DreamTrail Adventures - Newsletter Signup");

};



// FORM VALIDATION

function validateForm(){

    let firstName =
    document.forms["signupForm"]["firstname"].value;

    let lastName =
    document.forms["signupForm"]["lastname"].value;


    if(firstName == "" || lastName == ""){

        alert("First Name and Last Name are required.");

        return false;

    }

    alert("Newsletter form submitted successfully!");

    return false;

}