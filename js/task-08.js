const formElem = document.querySelector(".login-form");
const emailElem = document.querySelector('input[name="email"]');
const passwElem = document.querySelector('input[name="password"]');
const submitElem = document.querySelector('button[type="submit"]');
formElem.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }, } = event.currentTarget;
    if (emailElem.value === "" || passwElem.value === "") {
        return alert("Please enter a valid value");
    }
    const inputData = {
        email: email.value,
        password: password.value,
    };
    console.log(inputData);
    event.currentTarget.reset();
}
