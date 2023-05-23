const activepage = window.location.pathname;
const navlink = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes("${home.html}")) {
    link.classList.add("active");
  }
});
