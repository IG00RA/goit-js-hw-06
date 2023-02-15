const formObj = document.querySelector(".login-form");
const emailObj = document.querySelector('input[name="email"]');
const passwObj = document.querySelector('input[name="password"]');
const submitObj = document.querySelector('button[type="submit"]');

formObj.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (emailObj.value === "" || passwObj.value === "") {
    return alert("Please enter a valid value");
  }
  const inputData = {
    email: email.value,
    password: password.value,
  };
  console.log(inputData);
  event.currentTarget.reset();
}
