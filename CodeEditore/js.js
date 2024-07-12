const codeEditor = document.getElementById("code-editor");
const resultEditor = document.getElementById("result-editor");
const languageSelect = document.getElementById("language-select");
const themeSelect = document.getElementById("theme-select");

window.addEventListener("load", function () {
  const storedClass = localStorage.getItem("class");
  codeEditor.classList.add(storedClass);
  resultEditor.classList.add(storedClass);
  console.log("class");
});

themeSelect.addEventListener("change", (e) => {
  const theme = e.target.value;
  if ((codeEditor.className = "light")) {
    codeEditor.classList.remove("light");
    resultEditor.classList.remove("light");
    codeEditor.className = `${codeEditor.className} ${theme}`;
    resultEditor.className = `${codeEditor.className} ${theme}`;
    localStorage.setItem("class", `${theme}`);
  } else {
    codeEditor.classList.remove("dark");
    resultEditor.classList.remove("dark");
    codeEditor.className = `${codeEditor.className} ${theme}`;
    resultEditor.className = `${codeEditor.className} ${theme}`;
    localStorage.setItem("class", `${theme}`);
  }
});

codeEditor.addEventListener("input", (e) => {
  const code = e.target.value;
  resultEditor.innerHTML = code;
  console.log(code);
});

// const element = document.getElementById("yourElement");
// element.classList.add("yourClass");

// // Store the class name in sessionStorage
// sessionStorage.setItem("class", "yourClass");

// // To add the class when the page is refreshed
// window.addEventListener("load", function () {
//   const storedClass = sessionStorage.getItem("class");
//   element.classList.add(storedClass);
// });
