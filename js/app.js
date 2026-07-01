// ===========================
// UI Elements
// ===========================

const ui = {
  editor: document.getElementById("editor"),
  preview: document.getElementById("preview"),
  currentFile: document.getElementById("current-file"),

  languageStatus: document.getElementById("language-status"),
  saveStatus: document.getElementById("save-status"),

  htmlFile: document.getElementById("html-file"),
  cssFile: document.getElementById("css-file"),
  jsFile: document.getElementById("js-file"),

  consoleOutput: document.getElementById("console-output"),
  clearConsoleButton: document.getElementById("clear-console"),
};

// ===========================
// Events
// ===========================

ui.editor.addEventListener("input", () => {
  saveCurrentFile();
  updatePreview();
});

ui.htmlFile.addEventListener("click", () => {
  saveCurrentFile();
  openFile("html");
});

ui.cssFile.addEventListener("click", () => {
  saveCurrentFile();
  openFile("css");
});

ui.jsFile.addEventListener("click", () => {
  saveCurrentFile();
  openFile("js");
});
// ===========================

window.addEventListener("message", (event) => {
  if (event.data.type !== "console-log") return;

  const consoleOutput = document.getElementById("console-output");

  const line = document.createElement("div");

  line.textContent = event.data.data.join(" ");

  consoleOutput.appendChild(line);

  consoleOutput.scrollTop = consoleOutput.scrollHeight;
});

ui.clearConsoleButton.addEventListener("click", () => {
  ui.consoleOutput.innerHTML = "";
});

// ===========================
// Start Application
// ===========================

loadProject();
