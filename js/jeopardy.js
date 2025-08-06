// Einfache Punkteverwaltung
const teams = document.querySelectorAll(".team");
teams.forEach(team => {
  team.querySelector(".plus").addEventListener("click", () => {
    const scoreEl = team.querySelector(".score");
    scoreEl.textContent = parseInt(scoreEl.textContent) + 100;
  });
  team.querySelector(".minus").addEventListener("click", () => {
    const scoreEl = team.querySelector(".score");
    let score = parseInt(scoreEl.textContent);
    if (score >= 100) scoreEl.textContent = score - 100;
  });
});

// Einfacher Frage-Button Handler
const questions = document.querySelectorAll(".question");
questions.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Frage ausgewählt: " + btn.textContent);
    btn.disabled = true; // Frage "wegnehmen"
  });
});

// Button zum Öffnen des Namensrads
document.getElementById("openRad").addEventListener("click", () => {
  // Öffnet rad.html in neuem Tab
  window.open("rad.html", "_blank");
});
