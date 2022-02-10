const scrollBackToTop = (() => {
  const show = 150;
  const backtop = document.querySelector("#totop");

  const scrollcontainer = () => {
    return document.documentElement || document.body;
  };

  document.addEventListener("scroll", () => {
    if (scrollcontainer().scrollTop > show) {
      backtop.classList.remove("hidden");
    } else {
      backtop.classList.add("hidden");
    }
  });
  const goTop = () => {
    document.body.scrollIntoView();
  };

  backtop.addEventListener("click", goTop);
})();

//TODO:
//better looking form. make a postcard?
