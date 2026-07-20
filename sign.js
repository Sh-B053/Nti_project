// // ---------------------signup--------------------------
let form = document.querySelector("#signupForm");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector(".signup-form button");
let errors = document.querySelectorAll(".error");

let usernameRegex = /^[A-Za-z]{3,20}$/;
let passwordRegex = /^(?=.*[A-Z]).+$/;

function showError(index, message) {

    errors[index].textContent = message;

}
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log("Form Submitted");
// })

form.addEventListener("submit",function(e){
    e.preventDefault();
    errors.forEach(function(error){
    error.textContent = "";
});
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let emailValue = email.value.trim();
    if (usernameValue == "") {
        showError(0, "Please enter username");
        return;
    }
    if (emailValue == "") {
        showError(1, "Please enter email");
        return;
    }
    if (passwordValue == "") {
        showError(2, "Please enter password");
        return;
    }
    if (!usernameRegex.test(usernameValue)) {
        showError(0, "Username is not valid");
        return;
    }
    if (!passwordRegex.test(passwordValue)) {
        showError(2, "Password must contain one capital letter");
        return;
    }
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameValue,
            email: emailValue,
            password: passwordValue
        })
    })
    .then(function (response) {
        return response.json();
    })
.then(function (data) {
    alert("Registration Successful");
    console.log(data);
    form.reset();
})
    .catch(function (error) {
        console.log(error);
    });
});
