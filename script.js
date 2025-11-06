// script.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("getBtn");
  const display = document.getElementById("number");

  async function fetchNumber() {
    try {
      btn.disabled = true;
      btn.textContent = "Obteniendo...";
      display.textContent = "";

      const resp = await fetch("/number", { cache: "no-store" });
      if (!resp.ok) throw new Error(`Error en servidor: ${resp.status}`);
      const data = await resp.json();

      // validar respuesta
      if (typeof data.number !== "number") {
        display.textContent = "Respuesta inesperada";
      } else {
        // animación simple: parpadeo
        display.style.opacity = "0";
        setTimeout(() => {
          display.textContent = data.number;
          display.style.transition = "opacity 260ms ease";
          display.style.opacity = "1";
        }, 120);
      }
    } catch (err) {
      console.error(err);
      display.textContent = "Error al obtener número";
    } finally {
      btn.disabled = false;
      btn.textContent = "Obtener número";
    }
  }

  btn.addEventListener("click", fetchNumber);
});