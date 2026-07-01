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

  const line = document.createElement("div");

  event.data.data.forEach((item) => {
    if (typeof item === "object" && item !== null) {
      const pre = document.createElement("pre");

      pre.textContent = JSON.stringify(item, null, 2);

      line.appendChild(pre);
    } else {
      const span = document.createElement("span");

      span.textContent = item + " ";

      line.appendChild(span);
    }
  });
  // Add class based on log type
  line.classList.add(`console-${event.data.level}`);

  ui.consoleOutput.appendChild(line);

  ui.consoleOutput.scrollTop = ui.consoleOutput.scrollHeight;
});

ui.clearConsoleButton.addEventListener("click", () => {
  ui.consoleOutput.innerHTML = "";
});

// ===========================
// Start Application
// ===========================

loadProject();
