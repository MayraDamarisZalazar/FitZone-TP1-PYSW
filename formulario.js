document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const spinner = document.getElementById("spinner");
  const modal = document.getElementById("modal");
  const cerrarModal = document.getElementById("cerrar-modal");

  // 🔒 Forzar ocultar modal y spinner al cargar la página
  modal.classList.add("hidden");
  spinner.classList.add("hidden");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validar campos manualmente por seguridad
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.add("hidden");
      modal.classList.remove("hidden");
      formulario.reset();
    }, 2000); // Simula envío
  });

  cerrarModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
