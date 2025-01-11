window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const header = document.querySelector("header");
  const scroll = hero.getBoundingClientRect().bottom;
  if (scroll <= 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
