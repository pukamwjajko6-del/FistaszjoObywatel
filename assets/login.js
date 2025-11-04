const VALID_KEY = "2937-8419-0236"; 

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const input = document.getElementById("accessKey");
  const error = document.getElementById("loginError");

  loginBtn.addEventListener("click", () => {
    const key = input.value.trim();

    if (key === VALID_KEY) {
      localStorage.setItem("authorized", "true");
      window.location.href = "dashboard.html"; // redirect to next page
    } else {
      error.textContent = "Nieprawidłowy klucz dostępu.";
    }
  });
});
