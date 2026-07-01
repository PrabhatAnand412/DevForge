// ===========================
// Get Elements
// ===========================

const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const preview = document.getElementById("preview");

// ===========================
// Update Preview
// ===========================

function updatePreview() {
  preview.srcdoc = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

<style>
${cssEditor.value}
</style>

</head>

<body>

${htmlEditor.value}

<script>
${jsEditor.value}
<\/script>

</body>

</html>
`;

  saveProject();
}

// ===========================
// Save Project
// ===========================

function saveProject() {
  const project = {
    html: htmlEditor.value,
    css: cssEditor.value,
    js: jsEditor.value,
  };

  localStorage.setItem("devforge-project", JSON.stringify(project));
}

// ===========================
// Load Project
// ===========================

function loadProject() {
  const savedProject = localStorage.getItem("devforge-project");

  if (!savedProject) {
    updatePreview();
    return;
  }

  const project = JSON.parse(savedProject);

  htmlEditor.value = project.html;
  cssEditor.value = project.css;
  jsEditor.value = project.js;

  updatePreview();
}

// ===========================
// Event Listeners
// ===========================

htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);
jsEditor.addEventListener("input", updatePreview);

// ===========================
// Start Application
// ===========================

loadProject();
