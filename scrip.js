
const ul = document.getElementById("menu");

const setActiveMenuItem = () => {
  const elements = document.querySelectorAll(".menu-item");
  elements.forEach(e => {
    if (e.classList.contains("active")) {
      const activeElement = e;
      let x = activeElement.offsetWidth;
      let y = activeElement.offsetLeft;
      let slide1 = document.getElementById("s1");
      slide1.style.cssText = `opacity: 1; left: ${y}px ; width: ${x}px;`;
      return;
    }
  });
};

const removeActiveMenuItem = () => {
  const elements = document.querySelectorAll(".menu-item");
  elements.forEach(e => {
    if (e.classList.contains("active")) {
      const activeElement = e;
      activeElement.classList.remove("active");
      return;
    }
  });
};

/* const addActiveMenuItem = () => {
  const elements = document.querySelectorAll(".menu-item");
  elements.forEach(e => {
    if (e.classList.contains("active")) {
      const activeElement = e;
      activeElement.classList.add("active");
      return;
    }
  });
}; */

/* const removeSlide2 = () => {
  const elements = document.querySelectorAll(".menu-item");
  elements.forEach(e => {
    if (e.classList.contains("slied2")) {
      const sliedTwoElement = e;
      sliedTwoElement.classList.remove("slide2");
      return;
    }
  });
}; */

/* const addSlide2 = () => {
  const elements = document.querySelectorAll(".menu-item");
  elements.forEach(e => {
    if (e.classList.contains("slied2")) {
      const sliedTwoElement = e;
      sliedTwoElement.classList.add("slide2");
      return;
    }
  });
}; */

window.onload = function() {
  setActiveMenuItem();
};

ul.onclick = function(event) {
  removeActiveMenuItem();

  if (event.target.classList.contains("menu-item")) {
    let x = event.target.offsetWidth;
    let y = event.target.offsetLeft;

    let elementId = event.target.innerHTML;
    let e = document.getElementById(elementId);

    let slide1 = document.getElementById("s1");
    slide1.style.cssText = `opacity: 1; left: ${y}px ; width: ${x}px;`;

    e.classList.add("active");
  }
};

ul.onmouseover = function(event) {
  if (event.target.classList.contains("menu-item")) {
    let x = event.target.offsetWidth;
    let y = event.target.offsetLeft;

    let elementId = event.target.innerHTML;
    let e = document.getElementById(elementId);

    let slide2 = document.getElementById("s2");
    slide2.style.cssText = `opacity: 1; left: ${y}px ; width: ${x}px;`;

    slide2.classList.add("squeeze");
  }
};

ul.onmouseout = function(event) {
  if (event.target.classList.contains("menu-item")) {
    let x = event.target.offsetWidth;
    let y = event.target.offsetLeft;
    let elementId = event.target.innerHTML;

    let e = document.getElementById(elementId);
    let slide2 = document.getElementById("s2");
    slide2.style.cssText = `opacity: 0;  left: ${y}px ; width: ${x}px;`;

    slide2.classList.remove("squeeze");
  }
};

