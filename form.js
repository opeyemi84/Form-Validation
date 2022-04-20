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

  //Regex Validations
  const countryRegex = /^[a-zA-Z -]+$/.test(countryValue);
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/.test(
    passwordValue
  );

  if (emailValue === "") {
    setErrorFor(email, "Email Field cannot be empty");
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (countryValue === "") {
    setErrorFor(country, "Country field cannot be empty");
  } else if (!countryRegex) {
    setErrorFor(country, "Only alphabets can be entered");
  } else {
    setSuccessFor(country);
  }

  if (zipValue === "") {
    setErrorFor(zip, "Zip Code field cannot be empty");
  } else if (!isZipCodeValid(zipValue)) {
    setErrorFor(zip, "Enter at least 5 US digit Zip Code");
  } else {
    setSuccessFor(zip);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password field cannot be empty");
  } else if (!passwordRegex) {
    setErrorFor(
      password,
      "Must be at least 4 characters, no more than 15 characters, must include at least one upper case letter, one lower case letter, and one numeric digit."
    );
  } else {
    setSuccessFor(password);
  }

  if (confirm2Value === "") {
    //show error
    //add error class
    setErrorFor(confirm2, "Confirm Password field cannot be empty");
  } else if (passwordValue !== confirm2Value) {
    setErrorFor(confirm2, "Password does not match");
  } else {
    //add success class
    setSuccessFor(confirm2);
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
