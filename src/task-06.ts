const inputElement: HTMLInputElement | null =
  document.querySelector("#validation-input");
if (inputElement) {
  const maxLength: string | undefined = inputElement.dataset.length;
  inputElement.addEventListener("blur", submitFunc);

  function submitFunc(): void {
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
