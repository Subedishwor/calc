let togglers = document.querySelectorAll(".theme-box p");
let body = document.body;

let toggleOne = togglers[0];
let toggleTwo = togglers[1];
let toggleThree = togglers[2];

let nowFirstTheme = () => {
  body.className = "theme-one";
};

let nowSecondTheme = () => {
  body.className = "theme-two";
};

let nowThirdTheme = () => {
  body.className = "theme-three";
};

togglers.forEach((toggler) => {
  toggler.addEventListener("click", () => {
    toggleOne.className = "";
    toggleTwo.className = "";
    toggleThree.className = "";
    toggler.className += "toggle";

    if (toggleTwo.className === "toggle") {
      nowSecondTheme();
    } else if (toggleThree.className === "toggle") {
      nowThirdTheme();
    } else {
      nowFirstTheme();
    }
  });
});
