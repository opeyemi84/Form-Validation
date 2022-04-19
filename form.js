const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirm2 = document.getElementById("confirm2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// function to check inputs
const checkInputs = () => {
  const emailValue = email.value.trim();
  const countryValue = country.value.trim();
  const zipValue = zip.value.trim();
  const passwordValue = password.value.trim();
  const confirm2Value = confirm2.value.trim();

  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "Cannot be empty");
  } else {
    //add success class
    setSuccessFor(email);
  }

  if (countryValue === "") {
    //show error
    //add error class
    setErrorFor(country, "Cannot be empty");
  } else {
    //add success class
    setSuccessFor(country);
  }

  if (zipValue === "") {
    //show error
    //add error class
  } else {
    //add success class
  }

  if (passwordValue === "") {
    //show error
    //add error class
  } else {
    //add success class
  }

  if (confirm2Value === "") {
    //show error
    //add error class
  } else {
    //add success class
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Add error message inside small tag
  small.textContent = message;

  //Add error class
  formControl.className = "form-control error";
};
