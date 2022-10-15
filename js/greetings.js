const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const loginSubmit = document.querySelector(".login-form__submit");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const handleLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};
function paintGreetings(username) {
  greeting.innerText = `You ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
