// Seleccionamos todos los Elementos de cabecera de acordeón
const headers = document.querySelectorAll(".acordeon-header");

// A esa selección, le asignamos una escucha de evento click
headers.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;

    // Cerrar los demás (como Bootstrap)
    headers.forEach(h => {
      if (h !== header) {
        h.classList.remove("active");
        h.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle actual, añade/quita la clase
    header.classList.toggle("active");

    if (body.style.maxHeight) {
      body.style.maxHeight = null;
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});
