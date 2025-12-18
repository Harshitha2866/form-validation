function validateForm() {
    var fn = document.forms["myForm"]["fname"].value.trim();
    var ln = document.forms["myForm"]["lname"].value.trim();
    var mail = document.forms["myForm"]["email"].value.trim();
    var phone = document.forms["myForm"]["no"].value.trim();
    var select = document.getElementById("opt").value;
    var zip = document.getElementById("zip").value.trim();
    var domain = document.getElementById("domainname").value.trim();

    var regName = /^[A-Za-z\s]+$/;
    var regEmail = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    var regPhone = /^\d{10}$/;
    var regZip = /^\d{6}$/;
    var regDomain = /^[a-z0-9]+([\-\.][a-z0-9]+)*\.[a-z]{2,6}$/i;

    if (!regName.test(fn)) {
        alert("Please enter a valid First Name");
        return false;
    }

    if (!regName.test(ln)) {
        alert("Please enter a valid Last Name");
        return false;
    }

    if (!regEmail.test(mail)) {
        alert("Please enter a valid Email ID");
        return false;
    }

    if (!regPhone.test(phone)) {
        alert("Please enter a valid 10-digit Phone Number");
        return false;
    }

    if (select === "") {
        alert("Please select an option");
        return false;
    }

    if (!regZip.test(zip)) {
        alert("Please enter a valid 6-digit ZIP code");
        return false;
    }

    if (!regDomain.test(domain)) {
        alert("Please enter a valid Domain Name");
        return false;
    }

    alert("Details submitted successfully!");
    return true;
}
