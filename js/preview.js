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

// Keep browser console working
const originalLog = console.log;

// Replace console.log
console.log = function (...args) {

    // Still print to DevTools
    originalLog(...args);

    // Send message to DevForge
    window.parent.postMessage({
        type: "console-log",
        data: args
    }, "*");
};

// User code
${project.js}

<\/script>

</body>
</html>
`;

  saveProject();
}
