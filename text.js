const pText = document.querySelector('.person_name');
const txt = " Konrad Pietkiewicz"

let indexText = 0;
const time = 90;
const addLetter = () => {
    pText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);