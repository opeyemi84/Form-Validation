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
    setErrorFor(email, "Email Cannot be empty");
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (countryValue === "") {
    setErrorFor(country, "Cannot be empty");
  } else {
    //add success class
    setSuccessFor(country);
  }

  if (zipValue === "") {
    //show error
    //add error class
    setErrorFor(zip, "Cannot be empty");
  } else if (!isZipCodeValid(zipValue)) {
    setErrorFor(zip, "Enter at least 5 US digit Zip Code");
  } else {
    setSuccessFor(zip);
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

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

//function to validate email address
function isEmailValid(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

//function to validate 5 digit US Zip Code
function isZipCodeValid(zipcode) {
  return /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/.test(zipcode);
}
