window.onload = function() {

    var submitForm = document.getElementById("submitAll");

    submitForm.addEventListener('click', () => {

        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;
        let eMail = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        console.log(firstName);
        console.log(lastName);
        console.log(eMail);
        console.log(password);
    });
}
