const headerLinks = document.querySelectorAll(".header-link");

headerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.body.className = "";
    console.log("jgh");
    document.body.classList.add(this.id);
  });
});

