document.addEventListener("DOMContentLoaded", function () {
  let candlesLit = 0;
  const candles = document.querySelectorAll(".candle");
  const lightButton = document.querySelector(".light-candle-btn");
  const menorah = document.querySelector(".floating-menorah");

  // פונקציה ליצירת זיקוק
  function createFirework(x, y) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    firework.style.background = `radial-gradient(circle, 
      ${getRandomColor()} 10%, 
      ${getRandomColor()} 30%, 
      transparent 70%)`;
    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }

  function getRandomColor() {
    const colors = ["#ffd700", "#ff8c00", "#ff4500", "#ff69b4", "#00ff00"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // פונקציה להדלקת נר עם אנימציות משופרות
  function lightNextCandle() {
    if (candlesLit < 8) {
      const currentCandle = candles[candlesLit];

      // אנימציית הדלקה הדרגתית
      currentCandle.style.transition = "all 1s ease";
      currentCandle.classList.add("lit");

      // יצירת זיקוקים
      const rect = currentCandle.getBoundingClientRect();
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          createFirework(
            rect.left + Math.random() * 50,
            rect.top + Math.random() * 50
          );
        }, i * 200);
      }

      candlesLit++;

      // עדכון כפתור וסטטוס
      if (candlesLit === 8) {
        lightButton.textContent = "חג שמח! 🕎";
        lightButton.disabled = true;
        menorah.classList.add("all-lit");
        celebrateAllCandles();
      } else {
        lightButton.textContent = `הדלק נר ${candlesLit + 1}`;
      }

      // אפקט קולי
      const audio = new Audio("candle-light.mp3");
      audio.play();
    }
  }

  // חגיגה כשכל הנרות דולקים
  function celebrateAllCandles() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createFirework(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 200);
    }
  }

  // הוספת מאזיני אירועים
  if (lightButton) {
    lightButton.addEventListener("click", lightNextCandle);
  }

  // אנימציית hover לנרות
  candles.forEach((candle) => {
    candle.addEventListener("mouseover", () => {
      if (candle.classList.contains("lit")) {
        candle.style.transform = "translateY(-2px) rotate(1deg)";
      }
    });

    candle.addEventListener("mouseout", () => {
      candle.style.transform = "none";
    });
  });
});
