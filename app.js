function validate() {
  let initPass = document.getElementById("initial-pass");
  let confirmPass = document.getElementById("confirm-pass");
  let validationError = document.getElementById("validation-error");

  if (initPass.value !== confirmPass.value) {
    initPass.classList.add("error");
    confirmPass.classList.add("error");
    validationError.style.visibility = "visible";
  } else {
    initPass.classList.remove("error");
    confirmPass.classList.remove("error");
    validationError.style.visibility = "hidden";
  }
}
