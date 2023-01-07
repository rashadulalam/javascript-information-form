// information form
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const btn = document.getElementById("submit");
const errMsg = document.getElementById("error");
const result = document.getElementById("result");
let error;


errMsg.style.display = "none"
result.style.display = "none"

btn.addEventListener("click", function() {

    // check value
    if(fullName.value == "") {
        error = "Please insert your full name!";
    } else if(email.value == "") {
        error = "Please insert email address!";
    } else if(address.value == "") {
        error = "Please insert full address!";
    } else {
        error = false;

        // show the result
        result.style.display = "block"
        document.getElementById("rName").innerHTML = fullName.value;
        document.getElementById("rEmail").innerHTML = email.value;
        document.getElementById("rAddress").innerHTML = address.value;



    }

    // errMsg
    if(error) {
        errMsg.style.display = "block"
        errMsg.innerHTML = `<p>${error}</p>`
    } else {
        errMsg.style.display = "none"
    }


})