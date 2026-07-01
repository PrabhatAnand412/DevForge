function updateActiveFile() {
  ui.htmlFile.classList.remove("active-file");
  ui.cssFile.classList.remove("active-file");
  ui.jsFile.classList.remove("active-file");

  switch (activeFile) {
    case "html":
      ui.htmlFile.classList.add("active-file");
      break;

    case "css":
      ui.cssFile.classList.add("active-file");
      break;

    case "js":
      ui.jsFile.classList.add("active-file");
      break;
  }
}
