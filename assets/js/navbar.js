/* ===== NAVBAR JS ===== */


/* Post DOM Condition */
document.addEventListener("DOMContentLoaded", function () {
  /* Navbar HTML */
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div class="container-fluid justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/projects/index.html">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="/resources/index.html">Resources</a></li>
          <li class="nav-item"><a class="nav-link" href="/about.html">About This Site</a></li>
        </ul>
      </div>
    </nav>
  `;
  /* Create-Inject-Add Element Before Body*/
  const header = document.createElement("header");
  header.innerHTML = navbarHTML;
  document.body.prepend(header);
});

