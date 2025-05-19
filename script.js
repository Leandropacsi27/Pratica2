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


// Grid 4.1 - Cuadrícula básica
function updateGrid1() {
  const cols = document.getElementById("cols1").value;
  const rows = document.getElementById("rows1").value;
  const gap = document.getElementById("gap1").value;

  const grid = document.getElementById("gridContainer1");
  grid.style.gridTemplateColumns = cols;
  grid.style.gridTemplateRows = rows;
  grid.style.gap = gap;

  document.getElementById("codeGrid1").textContent =
    `grid-template-columns: ${cols};\n` +
    `grid-template-rows: ${rows};\n` +
    `gap: ${gap};`;
}

["cols1", "rows1", "gap1"].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateGrid1);
});

// Grid 4.2 - Posicionar elementos específicos
function updateGrid2() {
  const item1 = document.getElementById("item1");
  const item4 = document.getElementById("item4");

  const item1Col = document.getElementById("item1Col").value;
  const item1Row = document.getElementById("item1Row").value;
  const item4Col = document.getElementById("item4Col").value;
  const item4Row = document.getElementById("item4Row").value;

  item1.style.gridColumn = item1Col;
  item1.style.gridRow = item1Row;
  item4.style.gridColumn = item4Col;
  item4.style.gridRow = item4Row;

  document.getElementById("codeGrid2").textContent =
    `.item1 {\n  grid-column: ${item1Col};\n  grid-row: ${item1Row};\n}\n\n` +
    `.item4 {\n  grid-column: ${item4Col};\n  grid-row: ${item4Row};\n}`;
}

["item1Col", "item1Row", "item4Col", "item4Row"].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateGrid2);
});

// Grid 4.3 - Áreas nombradas
function updateGrid3() {
  const cols = document.getElementById("cols3").value;
  const rows = document.getElementById("rows3").value;
  const areas = document.getElementById("areas3").value;

  const grid = document.getElementById("gridContainer3");
  grid.style.gridTemplateColumns = cols;
  grid.style.gridTemplateRows = rows;
  grid.style.gridTemplateAreas = areas;

  document.getElementById("header").style.gridArea = "header";
  document.getElementById("sidebar").style.gridArea = "sidebar";
  document.getElementById("content").style.gridArea = "content";

  document.getElementById("codeGrid3").textContent =
    `grid-template-columns: ${cols};\n` +
    `grid-template-rows: ${rows};\n` +
    `grid-template-areas:\n${areas}`;
}

["cols3", "rows3", "areas3"].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateGrid3);
});

// Grid 4.5 - Responsive
function updateGrid4() {
  const cols = document.getElementById("cols4").value;
  const gap = document.getElementById("gap4").value;

  const grid = document.getElementById("gridContainer4");
  grid.style.gridTemplateColumns = cols;
  grid.style.gap = gap;

  document.getElementById("codeGrid4").textContent =
    `grid-template-columns: ${cols};\n` +
    `gap: ${gap};`;
}

["cols4", "gap4"].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateGrid4);
});

// Llamar a las funciones para inicializar el contenido
updateGrid1();
updateGrid2();
updateGrid3();
updateGrid4();
