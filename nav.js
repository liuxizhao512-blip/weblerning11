document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");

  if (!header) return;

  fetch("nav.html")
    .then((response) => {
      if (!response.ok) throw new Error("nav.html not found");
      return response.text();
    })
    .then((html) => {
      header.innerHTML = html;

      const currentPage = location.pathname.split("/").pop() || "index.html";
      const links = document.querySelectorAll(".nav-links a");

      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch((error) => {
      console.warn("Navigation failed to load:", error);
      header.innerHTML = `
        <nav class="navbar fallback-nav">
          <a href="index.html" class="brand">LearnLab</a>
          <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="project.html">Projects</a>
            <a href="quotes.html">Quotes</a>
            <a href="game.html">Game</a>
            <a href="machine.html">Machine</a>
            <a href="about.html">About</a>
          </div>
        </nav>
      `;
    });
});