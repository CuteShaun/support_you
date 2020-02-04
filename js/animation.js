(function() {
  const backgrounds = [
    "first-background",
    "second-background",
    "third-background"
  ];

  const changeOpacity = () => {
    const elem = document.getElementById("wrapper-inner");
    elem.style.opacity = "0";
  };

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const changeImageByTime = () => {
    const elem = document.getElementsByTagName("body")[0];
    if (localStorage) {
      let timerValue = localStorage.getItem("timerValue");
      if (!timerValue) {
        timerValue = new Date().toString();
        localStorage.setItem("timerValue", timerValue);
      }

      let diff = new Date().getTime() - new Date(timerValue).getTime();
      if (diff >= 1000 * 60 * 60 * 8) {
        localStorage.setItem("timerValue", new Date().toString());
        elem.classList.add(backgrounds[getRandomInt(3)]);
      }
    }
  };

  const animate = () => {
    const elem = document.getElementById("form");
    const elems = document.querySelectorAll(".st");

    elems.forEach(item => {
      item.classList.add("reset-transform");
    });
    elem.classList.add("reset-transform");
  };

  changeImageByTime();

  window.onload = function() {
    changeOpacity();
    animate();
  };
})();
