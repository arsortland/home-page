const domEffects = (() => {
  const projects = document.querySelectorAll(".project");

  projects.forEach((e) =>
    e.addEventListener("mouseenter", () => {
      e.classList.add("active");
    })
  );
  projects.forEach((e) =>
    e.addEventListener("mouseleave", () => e.classList.remove("active"))
  );
})();

//TODO:
//Add static button to top of page button!
//
