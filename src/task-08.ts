const formElem: HTMLFormElement | null = document.querySelector(".login-form");

formElem?.addEventListener("submit", handleSubmit);

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const formData = new FormData(form);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (email === "" || password === "") {
    return alert("Please enter a valid value");
  }
  type Input = {
    email: string;
    password: string;
  };
  const inputData: Input = {
    email,
    password,
  };
  console.log(inputData);
  form.reset();
}
