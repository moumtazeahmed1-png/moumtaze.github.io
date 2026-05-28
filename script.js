function showMessage() {
  alert("Bienvenue à l'École Les Pléiades !");
}

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerHTML = "☀️";
  } else {
    darkModeBtn.innerHTML = "🌙";
  }
});