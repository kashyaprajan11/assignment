const pipeline = document.querySelector("#pipeline");
const projectName = document.querySelector("#project-name");
const bucketName = document.querySelector("#bucket-name");
const cloudFileName = document.querySelector("#cloud-file-name");
const credentials = document.querySelector("#credentials");
const runEvery = document.querySelector("#run-every");
const errorMessage = document.querySelector("#message");

// console.log(pipeline, projectName, bucketName);

const isRequired = (value) => (value === "" ? false : true);

const minLength = (length) => (length < 5 ? false : true);

const noSpecial = (value) => {
  let regex = /^[A-Za-z0-9 ]+$/;
  return regex.test(value);
};

const startCharCheck = (value) => {
  if (value[0] === "_" || value[0] === "-" || value[0] === "+") return false;

  return true;
};

function isValidate(e) {
  const path = e.path[0];
  const value = e.target.value;

  let message = "";

  const required = isRequired(value);
  const lengthCheck = minLength(value.length);
  const specialCheck = noSpecial(value);
  const startChar = startCharCheck(value);

  if (required && lengthCheck && specialCheck && startChar) {
    path.classList.remove("error");
    path.classList.add("success");
  } else {
    console.log(false);
    path.classList.remove("success");
    path.classList.add("error");
  }

  if (!lengthCheck) message = "Length should be greater than 5";
  if (!specialCheck) message = "No special characters allowed";
  if (!startChar) message = "Cannot start with that";
  if (!required) message = "Please fill up!";

  errorMessage.textContent = message;
}

pipeline.addEventListener("input", isValidate);
projectName.addEventListener("input", isValidate);
bucketName.addEventListener("input", isValidate);
cloudFileName.addEventListener("input", isValidate);
credentials.addEventListener("input", isValidate);
runEvery.addEventListener("input", isValidate);
