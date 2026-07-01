function saveProject() {
  ui.saveStatus.textContent = "Saving...";

  localStorage.setItem("devforge-project", JSON.stringify(project));

  setTimeout(() => {
    ui.saveStatus.textContent = "Saved ✓";
  }, 150);
}

function loadProject() {
  const saved = localStorage.getItem("devforge-project");

  if (saved) {
    Object.assign(project, JSON.parse(saved));
  }

  openFile("html");
  updatePreview();
}
