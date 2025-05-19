function show(id) {
  document.querySelectorAll("section").forEach((sec) => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.getElementById("navLinks").classList.remove("show");
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

function simulateLessToCss(lessCode) {
  const varRegex = /@([\w-]+):\s*([^;]+);/g;
  const vars = {};
  let match;

  while ((match = varRegex.exec(lessCode)) !== null) {
    vars[match[1]] = match[2].trim();
  }

  let css = lessCode.replace(varRegex, "").trim();

  for (const v in vars) {
    const vPattern = new RegExp("@" + v, "g");
    css = css.replace(vPattern, vars[v]);
  }

  css = css.replace(/\/\/.*$/gm, "");

  return css.trim();
}

function bindEditor(idTextarea, idResult) {
  const textarea = document.getElementById(idTextarea);
  const result = document.getElementById(idResult);

  function update() {
    const lessCode = textarea.value;
    const cssCode = simulateLessToCss(lessCode);
    result.textContent = cssCode;
  }

  textarea.addEventListener("input", update);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  bindEditor("less-example-1", "css-result-1");
  bindEditor("less-example-2", "css-result-2");
  bindEditor("less-example-3", "css-result-3");
  bindEditor("less-example-4", "css-result-4");
});


function show(id) {
  document.querySelectorAll("section").forEach((sec) => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.getElementById("navLinks").classList.remove("show");
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

function simulateLessToCss(lessCode) {
  const varRegex = /@([\w-]+):\s*([^;]+);/g;
  const vars = {};
  let match;

  while ((match = varRegex.exec(lessCode)) !== null) {
    vars[match[1]] = match[2].trim();
  }

  let css = lessCode.replace(varRegex, "").trim();

  for (const v in vars) {
    const vPattern = new RegExp("@" + v, "g");
    css = css.replace(vPattern, vars[v]);
  }

  css = css.replace(/\/\/.*$/gm, "");

  return css.trim();
}

function bindEditor(idTextarea, idResult) {
  const textarea = document.getElementById(idTextarea);
  const result = document.getElementById(idResult);

  function update() {
    const lessCode = textarea.value;
    const cssCode = simulateLessToCss(lessCode);
    result.textContent = cssCode;
  }

  textarea.addEventListener("input", update);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  bindEditor("less-example-1", "css-result-1");
  bindEditor("less-example-2", "css-result-2");
  bindEditor("less-example-3", "css-result-3");
  bindEditor("less-example-4", "css-result-4");
});


