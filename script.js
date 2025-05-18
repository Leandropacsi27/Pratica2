function show(id) {
  document.querySelectorAll("section").forEach((sec) => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  // Cerrar el menú si está abierto (en modo móvil)
  document.getElementById("navLinks").classList.remove("show");
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
// Obtener elementos
const textarea = document.getElementById("cssCodeExample");
const boxes = document.querySelectorAll(".container-demo .box-demo");
const codeBlock = document.getElementById("codeBlock");

// Función para aplicar estilos CSS inline a cada caja
function updateBoxStyles() {
  const cssText = textarea.value;
  boxes.forEach((box) => {
    box.style.cssText = cssText;
  });

  // Actualizar el bloque de código para mostrar lo que el usuario escribe
  codeBlock.textContent = `.container-demo .box-demo {\n  ${cssText.replace(
    /\n/g,
    "\n  "
  )}\n}`;
}

// Escuchar cambios en textarea
textarea.addEventListener("input", updateBoxStyles);

// Aplicar estilo inicial al cargar
updateBoxStyles();
