function initInscriptionForm() {
  const form = document.getElementById("inscriptionForm");
  const formMessage = document.getElementById("formMessage");

  if (!form || !formMessage) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      formMessage.textContent = "Por favor revisa los campos marcados en rojo.";
      formMessage.className = "mt-2 small text-danger";
      return;
    }

    form.classList.remove("was-validated");
    form.reset();

    formMessage.textContent =
      "Gracias. Hemos recibido los datos de tu colegio correctamente. Nuestro equipo se pondrá en contacto por correo para continuar con el proceso de inscripción.";
    formMessage.className = "mt-2 small text-success";

    setTimeout(() => {
      formMessage.textContent =
        "Revisa los campos obligatorios antes de enviar el formulario.";
      formMessage.className = "";
    }, 6000);
  });
}
