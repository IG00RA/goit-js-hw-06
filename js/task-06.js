const inputElement = document.querySelector("#validation-input");
if (inputElement) {
    const maxLength = inputElement.dataset.length;
    inputElement.addEventListener("blur", submitFunc);
    function submitFunc() {
        if (inputElement) {
            if (inputElement.value.length === Number(maxLength)) {
                inputElement.classList.remove("invalid");
                return inputElement.classList.add("valid");
            }
            inputElement.classList.remove("valid");
            inputElement.classList.add("invalid");
        }
    }
}
