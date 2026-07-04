function saveCurrentFile() {
  project[activeFile] = ui.editor.value;
}

function openFile(file) {
  activeFile = file;

  ui.editor.value = project[file];

  ui.currentFile.textContent = fileNames[file];

  const languageNames = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
  };

  ui.languageStatus.textContent = languageNames[file];

  updateActiveFile();
}