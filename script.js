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
//hover over pictures with a short description about them.
//better looking form. make a postcard?
//round picture of me somwhere mebe?
//Make 16:10 format look better.
//typos! formatting! phrasing!
