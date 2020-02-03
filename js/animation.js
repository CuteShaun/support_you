(function() {
  const changeOpacity = () => {
    const elem = document.getElementById("wrapper-inner");
    elem.style.opacity = "0";
  };

  const changeImageByTime = timeNow => {
    const elem = document.getElementsByTagName("body")[0];

    switch (true) {
      case timeNow >= 8 && timeNow <= 16:
        elem.classList.add("first-background");
        break;

      case timeNow >= 16 && timeNow <= 24:
        elem.classList.add("second-background");
        break;

      case timeNow >= 0 && timeNow <= 8:
        elem.classList.add("third-background");
        break;
      default:
        elem.classList.add("first-background");
    }
  };

  const getTime = () => {
    const today = new Date();
    const timeNow = today.getHours();
    changeImageByTime(timeNow);
  };

  const animate = () => {
    const elem = document.getElementById("form");
    const elems = document.querySelectorAll(".st");

    elems.forEach(item => {
      item.classList.add("reset-transform");
    });
    elem.classList.add("reset-transform");
  };

  getTime();

  window.onload = function() {
    changeOpacity();
    animate();
  };
})();
