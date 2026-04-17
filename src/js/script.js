const header = `
<header class="container">
    <a href="/index.html"><img src="/assets/images/isotipo.svg"></a>
    <nav>
      <a href="/index.html">INICIO</a>
      <div class="dropdown">
        <a href="#" id="menu-equipo">NUESTRO EQUIPO ▾</a>
        <div class="dropdown-content" id="dropdown-menu">
          <a href="/Presentacion-Personal/src/pages/pedro.html">Pedro Leon</a>
          <a href="/Presentacion-Personal/src/pages/victor.html">Victor Herrera</a>
          <a href="/src/pages/mariana.html">Mariana Iñiguez</a>
        </div>
      </div>
    </nav>
</header>
`;

document.getElementById("header").innerHTML = header;

const footer = `
<footer class="container">
  <div class="primera-parte">
    <a href="/index.html"><img src="/assets/images/logotipo.svg" id="logo"></a>
    <div class="contacto">
      <h3>Contacto</h3>
      <address>
        desarrolloweb@codecoffee.com
        <div class="redes">
          <a href="https://www.facebook.com"><img src="/assets/images/facebook.svg" alt="logo de facebook"></a>
          <a href="https://www.instagram.com"><img src="/assets/images/instagram.svg" alt="logo de instagram"></a>
          <a href="https://www.linkedin.com"><img src="/assets/images/linkedin.svg" alt="logo de linkedin"></a>
        </div>
      </address>
    </div>
  </div>
  <p>2026&copy; Code Coffee | Todos los derechos reservados </p>
</footer>
`;

document.getElementById("footer").innerHTML = footer;