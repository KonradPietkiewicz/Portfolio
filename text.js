const pText = document.querySelector(".person_welcome");
const txt = "Witam na mojej stronie :)";

let indexText = 0;
const time = 90;
const addLetter = () => {
  pText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, time);
