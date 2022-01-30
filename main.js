const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// ShowError Function
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.textContent = message;
}

// ShowSuccess Function
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check Matching Function
const checkMatching = function(input1, input2){
  if(input1.value == input2.value){
    showSuccess(input)
  }else{
    showError(input2, `Password is not match`);
  }
}

// Check Length Function
const checkLength = function(input, minChar, maxChar){
  if(input.value.length < minChar){
    showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must has att least ${minChar}chareckters`);
  }else if(input.value.length > maxChar){
    showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must has maximum ${maxChar}chareckters`);
  }else{
    showSuccess(input);
  }
}

// Check Required Function
const checkRequired = (inputs) => {
  inputs.forEach((input) => {
    if(input.value == ""){
      showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`);
    }else{
      showSuccess(input);
    }
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkMatching(password, password2);

})