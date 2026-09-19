const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

const song = document.getElementById("song");
const musicButton = document.getElementById("musicButton");
const musicNote = document.getElementById("musicNote");
let playing = false;

musicButton.addEventListener("click", async () => {
  if (!song.querySelector("source").src.endsWith("song.mp3")) return;
  try {
    if (playing) {
      song.pause();
      musicButton.innerHTML = "♫ <span>play our song</span>";
    } else {
      await song.play();
      musicButton.innerHTML = "Ⅱ <span>pause our song</span>";
    }
    playing = !playing;
  } catch {
    musicNote.textContent = "Please add a valid song.mp3 file in the assets folder first.";
  }
});
