import chalk from "chalk";

function setDarkTheme() {
    localStorage.setItem("theme", "dark");
    const root = document.getElementById("mainContainer");
    root.className = "dark";
  }

function setLightTheme() {
    localStorage.setItem("theme", "light");
    const root = document.getElementById("mainContainer");
    root.className = "light";
}

function getValue() {
    const theme = localStorage.getItem("theme");
    const root = document.getElementById("mainContainer");
    root.className = theme;
}

function cookie() {
    document.cookie();
}