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
}

// ===========================
// Event Listeners
// ===========================

htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);
jsEditor.addEventListener("input", updatePreview);

// Initial Preview
updatePreview();
