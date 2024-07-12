const codeEditor = document.getElementById("code-editor");
const resultEditor = document.getElementById("result-editor");
const languageSelect = document.getElementById("language-select");
const themeSelect = document.getElementById("theme-select");

languageSelect.addEventListener("change", (e) => {
  const language = e.target.value;
  codeEditor.className = `language-${language}`;
});

themeSelect.addEventListener("change", (e) => {
  const theme = e.target.value;
  if ((codeEditor.className = "light")) {
    codeEditor.classList.remove("light");
    resultEditor.classList.remove("light");
    codeEditor.className = `${codeEditor.className} ${theme}`;
    resultEditor.className = `${codeEditor.className} ${theme}`;
  } else {
    codeEditor.classList.remove("dark");
    resultEditor.classList.remove("dark");
    codeEditor.className = `${codeEditor.className} ${theme}`;
    resultEditor.className = `${codeEditor.className} ${theme}`;
  }
});

codeEditor.addEventListener("input", (e) => {
  const code = e.target.value;
  resultEditor.innerHTML = code;
  console.log(code);
});
