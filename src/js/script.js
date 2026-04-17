const headerHTML = `
  <div class="site-header__container">
    <a href="/index.html" class="site-header__logo">
      <img src="/assets/images/isotipo.svg" alt="Isotipo Code Coffee">
    </a>
    <nav class="site-header__nav" aria-label="Menú principal">
      <a href="/" class="site-header__nav-link">Inicio</a>
      <div class="site-header__nav-dropdown">
        <button class="site-header__nav-dropdown-toggle" aria-haspopup="true" aria-expanded="false">
          Nuestro Equipo ▾
        </button>
        <div class="site-header__nav-dropdown-content">
          <a href="/src/pages/pedro.html" class="site-header__nav-dropdown-link">Pedro Leon</a>
          <a href="/src/pages/mariana.html" class="site-header__nav-dropdown-link">Mariana Iñiguez</a>
        </div>
      </div>
    </nav>
  </div>
`;

const header = document.getElementById("header");
header.classList.add("site-header");
header.innerHTML = headerHTML;

const footerHTML = `
  <div class="site-footer__top">
    <a href="/" class="site-footer__logo">
      <img src="/assets/images/logotipo.svg" alt="Logotipo Code Coffee">
    </a>
    <div class="site-footer__contact">
      <h3 class="site-footer__contact-title">Contacto</h3>
      <address class="site-footer__contact-info">
        <p class="site-footer__contact-detail">desarrolloweb@codecoffee.com</p>
        <div class="site-footer__social">
          <a href="https://www.facebook.com" class="site-footer__social-link">
            <img src="/assets/images/facebook.svg" alt="Facebook">
          </a>
          <a href="https://www.instagram.com" class="site-footer__social-link">
            <img src="/assets/images/instagram.svg" alt="Instagram">
          </a>
          <a href="https://www.linkedin.com" class="site-footer__social-link">
            <img src="/assets/images/linkedin.svg" alt="LinkedIn">
          </a>
        </div>
      </address>
    </div>
  </div>
  <p class="site-footer__bottom">2026 &copy; Code Coffee | Todos los derechos reservados</p>

`;

const footer = document.getElementById("footer");
footer.classList.add("site-footer");
footer.innerHTML = footerHTML;




const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);

    const dataObj = {};
    formData.forEach((value, key) => {
      dataObj[key] = value;
    });

    console.log("Objeto enviado:", dataObj);

    await fetch(form.action, {
      method: form.method,
      body: formData,
      mode: "no-cors",
    });

    form.reset();
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
  }
});