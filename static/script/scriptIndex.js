const toggleBtn = document.getElementById("toggleMode");
    toggleBtn.addEventListener("click", () => {
    console.log("✅ Night Mode button clicked!");
    document.body.classList.toggle("night");
  });
