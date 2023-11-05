const formElem = document.querySelector(".login-form");
formElem === null || formElem === void 0 ? void 0 : formElem.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    if (email === "" || password === "") {
        return alert("Please enter a valid value");
    }
    const inputData = {
        email,
        password,
    };
    console.log(inputData);
    form.reset();
}
