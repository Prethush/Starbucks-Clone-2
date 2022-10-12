let closeBtn = document.querySelector(".cross");
let barsBtn = document.querySelector(".bars");
let mobileNav = document.querySelector(".mobile-nav");

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains("none")) {
    mobileNav.style.display = "block";
    mobileNav.classList.remove("none");
  } else {
    mobileNav.style.display = "none";
    mobileNav.classList.add("none");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileNav.style.display = "none";
  }
});
