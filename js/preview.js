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

// ===========================
// Console Bridge
// ===========================

function sendToParent(level, args) {
  window.parent.postMessage(
    {
      type: "console-log",
      level,
      data: args,
    },
    "*"
  );
}

const originalLog = console.log;
const originalWarn = console.warn;
const originalError = console.error;

console.log = (...args) => {
  originalLog(...args);
  sendToParent("log", args);
};

console.warn = (...args) => {
  originalWarn(...args);
  sendToParent("warn", args);
};

console.error = (...args) => {
  originalError(...args);
  sendToParent("error", args);
};


// ===========================
// User Code
// ===========================

try {
${project.js}
} catch (error) {
  console.error(error.stack || error.message || String(error));
}

<\/script>

</body>
</html>
`;

  saveProject();
}
