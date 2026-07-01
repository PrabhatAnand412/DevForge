function updatePreview() {
  ui.preview.srcdoc = `
<!DOCTYPE html>
<html>
<head>
<style>
${project.css}
</style>
</head>
<body>

${project.html}

<script>
${project.js}
<\/script>

</body>
</html>
`;

  saveProject();
}
