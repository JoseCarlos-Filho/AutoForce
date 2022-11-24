const topPage = document.querySelector(".botaotoppage");

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    topPage.style.display = "block";
  } else {
    topPage.style.display = "none";
  }
});

topPage.addEventListener("click", (e) => {
  e.target = window.scrollTo(0, 0);
});
