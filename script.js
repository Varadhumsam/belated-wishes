// The answer game on page 2
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const feedback = document.getElementById("feedback");
    const next = document.getElementById("next");
    if (button.dataset.answer === "yes") {
      feedback.textContent = "Correct! The best part is YOU. 💗";
      next.classList.remove("hidden");
      document.querySelectorAll(".choice").forEach((item) => item.disabled = true);
    } else {
      feedback.textContent = "Hehe, try again! Hint: it's the birthday girl. 😉";
    }
  });
});

// Final surprise button: floating hearts and stars
const confettiBtn = document.getElementById("confettiBtn");
if (confettiBtn) {
  confettiBtn.addEventListener("click", () => {
    document.getElementById("magic").classList.remove("hidden");
    const area = document.getElementById("confetti");
    const symbols = ["💗", "💖", "✨", "🦋", "💕", "🌸"];
    for (let i = 0; i < 36; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.animationDelay = Math.random() * 1.4 + "s";
      piece.style.animationDuration = (2.3 + Math.random() * 2) + "s";
      area.appendChild(piece);
      window.setTimeout(() => piece.remove(), 5000);
    }
  });
}
