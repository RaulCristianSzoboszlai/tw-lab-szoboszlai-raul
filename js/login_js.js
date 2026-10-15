let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const emailRegex = /^[a-z]+\.[a-z]+\d{0,2}@e-uvt\.ro$/i;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

  if (!emailRegex.test(email)) {
    alert("Email-ul nu respectă formatul UVT (ex: nume.prenume[2 cifre]@e-uvt.ro)!");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Parola trebuie să aibă minim 7 caractere, inclusiv o literă mare, una mică, o cifră și un caracter special!");
    return;
  }

  alert("Login reușit!");
  window.location.href = "home.html";
});