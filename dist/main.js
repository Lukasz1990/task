//walidacja//
const limitations = {
  telephone: /^\d{9,}$/,
  name: /^.{3,}/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,})?$/,
  topic: /^.{3,}/i,
  content: /^.{3,}/i
};

let inputs = document.querySelectorAll("input");

const validate = (field, regxt) => {
  regxt.test(field.value)
    ? field.parentNode.classList.add("valid")
    : field.parentNode.classList.add("invalid");
  if (
    regxt.test(field.value) &&
    field.parentNode.classList.contains("invalid")
  ) {
    field.parentNode.classList.remove("invalid");
  }
  if (
    !regxt.test(field.value) &&
    field.parentNode.classList.contains("valid")
  ) {
    field.parentNode.classList.remove("valid");
  }

  if (field.value === "") {
    field.parentNode.classList.remove("invalid");
  }
};

inputs.forEach(input => {
  let field = input;
  input.addEventListener("focus", () => {
    field.parentNode.children[1].style.bottom = "80%";
  });

  input.addEventListener("keyup", e => {
    validate(e.target, limitations[e.target.name]);
  });
});
