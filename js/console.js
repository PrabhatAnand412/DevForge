function addConsoleMessage(level, data) {
  const line = document.createElement("div");

  data.forEach((item) => {
    if (item instanceof Error) {
      const pre = document.createElement("pre");
      pre.textContent = item.stack || item.message;
      line.appendChild(pre);
    } else if (typeof item === "object" && item !== null) {
      const pre = document.createElement("pre");
      pre.textContent = JSON.stringify(item, null, 2);
      line.appendChild(pre);
    } else {
      const span = document.createElement("span");
      span.textContent = item + " ";
      line.appendChild(span);
    }
  });

  line.classList.add(`console-${level}`);

  ui.consoleOutput.appendChild(line);
  ui.consoleOutput.scrollTop = ui.consoleOutput.scrollHeight;
}

window.addEventListener("message", (event) => {
  if (event.data.type !== "console-log") return;

  addConsoleMessage(event.data.level, event.data.data);
});

ui.clearConsoleButton.addEventListener("click", () => {
  ui.consoleOutput.innerHTML = "";
});
