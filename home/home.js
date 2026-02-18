console.log("Home section loaded!");

// AI Girl floating effect is handled in CSS @keyframes float
// Additional interactions (optional) like glow on hover:
const aiGirl = document.querySelector(".ai-girl");

aiGirl.addEventListener("mouseenter", () => {
  aiGirl.style.filter = "drop-shadow(0 0 20px #2ad0ff) drop-shadow(0 0 20px #ff2ea6)";
});

aiGirl.addEventListener("mouseleave", () => {
  aiGirl.style.filter = "none";
});
