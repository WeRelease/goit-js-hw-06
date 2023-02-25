const inputEl = document.querySelector("#validation-input");

const onValidInput = (e) => {
  const addBorderColor =
    e.currentTarget.value.length !== 6 ? "invalid" : "valid";

  inputEl.classList.add(addBorderColor);
};

const onInputFocus = (e) => {
  inputEl.classList.remove(e.currentTarget.classList[0]);
};

inputEl.addEventListener("blur", onValidInput);
inputEl.addEventListener("focus", onInputFocus);
