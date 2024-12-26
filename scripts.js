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

      // אנימצ��ת הדלקה הדרגתית
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

function showLyricsModal(songId) {
  let title;
  let content;

  switch (songId) {
    case "maozTzur":
      title = "מעוז צור";
      content = maozTzurLyrics;
      break;
    case "banuChoshech":
      title = banuChoshechLyrics.title;
      content = banuChoshechLyrics.lyrics.join("\n");
      break;
    case "chanukiaLiYesh":
      title = chanukiaLiYeshLyrics.title;
      content = chanukiaLiYeshLyrics.lyrics.join("\n");
      break;
    case "sevivonSovSov":
      title = sevivonSovSovLyrics.title;
      content = sevivonSovSovLyrics.lyrics.join("\n");
      break;
  }

  // הסרת מודל קודם אם קיים
  const existingModal = document.getElementById("lyricsModal");
  if (existingModal) {
    existingModal.remove();
  }

  // יצירת המודל
  const modalHtml = `
        <div class="modal fade" id="lyricsModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="song-content">
                            <pre class="song-text">${content}</pre>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">סגור</button>
                    </div>
                </div>
            </div>
        </div>
    `;

  // הוספת המודל לדף
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // הצגת המודל
  const modal = new bootstrap.Modal(document.getElementById("lyricsModal"));
  modal.show();
}

function updateSource() {
  const source = displayDailySource();
  document.querySelector(".source-title").textContent = source.source;
  document.querySelector(".original-text").textContent = source.text;
  document.querySelector(".translation").textContent = source.translation;
  document.querySelector(".explanation").textContent = source.explanation;
}

// Initialize the source when the page loads
document.addEventListener("DOMContentLoaded", function () {
  updateSource();
});
