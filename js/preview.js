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
const originalWarn = console.warn;
const originalError = console.error;

// Replace console.log
console.log = function (...args) {
    originalLog(...args);

    window.parent.postMessage({
        type: "console-log",
        level: "log",
        data: args
    }, "*");
};

// Replace console.warn
console.warn = function (...args) {
    originalWarn(...args);

    window.parent.postMessage({
        type: "console-log",
        level: "warn",
        data: args
    }, "*");
};

// Replace console.error
console.error = function (...args) {
    originalError(...args);

    window.parent.postMessage({
        type: "console-log",
        level: "error",
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
