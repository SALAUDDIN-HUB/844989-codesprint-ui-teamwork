// JavaScript source code
function validation() {
    var a = document.form1.fname;
    var a = document.form1.lname;
    var a = document.form1.bfname;
    var a = document.form1.blname;
    var inputtext = document.form1.mail;
    var pin = document.form1.pin;

    if (allLetter(a)) {

        if (ValidateEmail(inputtext)) {
        }
    }
    return false;
}





function allLetter(a) {

    var letters = /^[A-Za-z]+$/;
    if (a == "") {
        alert("empty");
        a.focus();
        return false;
    }
    if (a.value.match(letters)) {
        return true;
    }
    else {
        alert("enter only alphabets");
        return false;
    }

}
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {

        return true;
    }
    else {
        alert("You have entered an invalid email address!");

        return false;
    }
}
function f() {

    let t11 = document.getElementById("ph1").value;
    if (t11 == "") {
        alert("Enter Mobile Number");
    }
    if (t11 != null)
        document.getElementById("ph2").focus();
}
function f1() {
    let t11 = document.getElementById("ph2").value;
    if (t11 != null)
        document.getElementById("ph3").focus();
}
function f2() {
    let t11 = document.getElementById("ph3").value;
    if (t11 != null)
        document.getElementById("ph4").focus();
}
function f3() {
    let t11 = document.getElementById("ph4").value;
    if (t11 != null)
        document.getElementById("ph5").focus();
}
function f4() {
    let t11 = document.getElementById("ph5").value;
    if (t11 != null)
        document.getElementById("ph6").focus();
}
function f5() {
    let t11 = document.getElementById("ph6").value;
    if (t11 != null)
        document.getElementById("ph7").focus();
}
function f6() {
    let t11 = document.getElementById("ph7").value;
    if (t11 != null)
        document.getElementById("ph8").focus();
}
function f7() {
    let t11 = document.getElementById("ph8").value;
    if (t11 != null)
        document.getElementById("ph9").focus();
}

function f8() {
    let t11 = document.getElementById("ph9").value;
    if (t11 != null)
        document.getElementById("ph10").focus();
}

function f9() {
    let t11 = document.getElementById("ph10").value;
    if (t11 != null)
        document.getElementById("email").focus();
}