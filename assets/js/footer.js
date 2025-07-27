/* ===== FOOTER JS ===== */

/* Post DOM Condition */
document.addEventListener("DOMContentLoaded", function () {
  /* Footer HTML */
  const footerHTML = `
    <div class="text-center text-white py-4 mt-5" style="background-color: black;">
      <div class="container">
        <hr class="bg-secondary my-4"> 
        <h2>🚀 Still a little AI sloppy, but it's coming together! 🚀</h2>
        <div class="mt-3">
          <a href="https://linktr.ee/OmnissiahCultist" class="btn btn-primary" target="_blank">🔗 Visit My Links</a>
        </div>
        <hr class="bg-secondary my-4">
        <p class="mb-0 small">© 2025 Zachary Strange | All vibes reserved.</p>
        <p class="mb-0 small">Built with <a href="https://getbootstrap.com/" class="text-white" target="_blank">Bootstrap</a> | Powered by <a href="https://pages.github.com/" class="text-white" target="_blank">GitHub Pages</a></p>
        <a href="#">⬆️Back to Top⬆️</a>
      </div>
    </div>
  `;
  /* Create-Inject-Add Element After Body */
  const footer = document.createElement("footer");
  footer.innerHTML = footerHTML;
  document.body.appendChild(footer);
});