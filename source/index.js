const textarea = document.createElement("textarea");
textarea.classList.add("body-textarea");
textarea.rows = "5";
textarea.cols = "100";
textarea.setAttribute("autofocus", "");

const body = document.querySelector("body");
body.prepend(textarea);


const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
textarea.after(keyboard);


for (let i = 0; i < 5; i++) {
   const keyRow = document.createElement("div");
   keyRow.classList.add("keyboard-row");
   keyboard.prepend(keyRow);
}
const keyboardRow = document.querySelectorAll(".keyboard-row");


const engElements = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
   "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "|", "Del",
   "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
   "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift",
   "Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

const engElementsShift = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
   "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del",
   "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter",
   "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift",
   "Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

const engElementsCaps = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
   "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "|", "Del",
   "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
   "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲", "Shift",
   "Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

const rusElements = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
   "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/", "Del",
   "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
   "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift",
   "Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

const rusElementsShift = ["Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
   "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
   "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", 'Э', "Enter",
   "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift",
   "Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

const rusElementsCaps = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
   "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
   "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", 'Э', "Enter",
   "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift",
   "Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

let rowLength = 0;


for (let i = 0; i < keyboardRow.length; i++) {
   let l = 13;
   if (i == 0) {
      l = 14;
   }
   if (i == 1) {
      l = 15;
   }
   if (i == 4) {
      l = 9;
   }

   for (let j = 0; j < l; j++) {
      const keyKey = document.createElement("div");
      keyKey.classList.add("keyboard-key");
      keyboardRow[i].append(keyKey);
      const eng = document.createElement("span");
      eng.classList.add("eng");
      eng.innerHTML = engElements[rowLength]
      keyKey.prepend(eng);
      const engShift = document.createElement("span");
      engShift.classList.add("engShift");
      engShift.innerHTML = engElementsShift[rowLength]
      keyKey.prepend(engShift);
      const engCaps = document.createElement("span");
      engCaps.classList.add("engCaps");
      engCaps.innerHTML = engElementsCaps[rowLength]
      keyKey.prepend(engCaps);
      const rus = document.createElement("span");
      rus.classList.add("rus");
      rus.innerHTML = rusElements[rowLength]
      keyKey.prepend(rus);
      const rusShift = document.createElement("span");
      rusShift.classList.add("rusShift");
      rusShift.innerHTML = rusElementsShift[rowLength]
      keyKey.prepend(rusShift);
      const rusCaps = document.createElement("span");
      rusCaps.classList.add("rusCaps");
      rusCaps.innerHTML = rusElementsCaps[rowLength]
      keyKey.prepend(rusCaps);

      engShift.classList.add("none");
      engCaps.classList.add("none");
      rus.classList.add("none");
      rusShift.classList.add("none");
      rusCaps.classList.add("none");

      rowLength++
   }
}


const keyboardRKey = document.querySelectorAll(".keyboard-key");
const engSpan = document.querySelectorAll(".eng");
const engSpanShift = document.querySelectorAll(".engShift");
const engSpanCaps = document.querySelectorAll(".engCaps");
const rusSpan = document.querySelectorAll(".rus");
const rusSpanShift = document.querySelectorAll(".rusShift");
const rusSpanCaps = document.querySelectorAll(".rusCaps");




const arrayKey = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
   'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
   'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
   'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
   'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

for (let i = 0; i < keyboardRKey.length; i++) {
   keyboardRKey[i].classList.add(arrayKey[i])
}


const discription = document.createElement("div");
discription.classList.add("discription");
discription.innerHTML = "Клавиатура создана в операционной системе Windows <br>" + "Для переключения языка комбинация: левыe Alt + Shift";
keyboard.after(discription);


const rightShift = document.querySelector(".ShiftRight");
const lefttShift = document.querySelector(".ShiftLeft");

function keyDown(event) {
   let keyCode = window.event.code;
   keyboardRKey.forEach(element => {
      if (element.classList.contains(keyCode)) {
         if (keyCode == "ShiftLeft" || keyCode == "ShiftRight") {
            element.classList.add("activ");
            shiftOn()
         }
         else if (keyCode == "CapsLock") { }
         else {
            element.classList.add("activ");
         }
      }
   });
}
document.addEventListener("keydown", keyDown)


function keyUp(event) {
   let keyCode = window.event.code;
   keyboardRKey.forEach(element => {
      if (element.classList.contains(keyCode)) {
         if (keyCode == "ShiftLeft" || keyCode == "ShiftRight") {
            element.classList.remove("activ");
            shiftOff()
         }
         else if (keyCode == "CapsLock") {
            capsOn()
         }
         else {
            element.classList.remove("activ");
         }
      }
   });
}
document.addEventListener("keyup", keyUp)



function shiftOn() {
   if (!leftAlt.classList.contains("activ")) {
      engSpan.forEach(element => {
         element.classList.add("none")
      });
      engSpanShift.forEach(element => {
         element.classList.remove("none")
      });
   }
}

function shiftOff() {
   if (!leftAlt.classList.contains("activ")) {
      engSpan.forEach(element => {
         element.classList.remove("none")
      });
      engSpanShift.forEach(element => {
         element.classList.add("none")
      });
   }
}
const capsLock = document.querySelector(".CapsLock");


function capsOn() {
   capsLock.classList.toggle("activ")
   engSpan.forEach(element => {
      element.classList.toggle("none")
   });
   engSpanShift.forEach(element => {
      element.classList.add("none")
   });
   engSpanCaps.forEach(element => {
      element.classList.toggle("none")
   });
}
const leftAlt = document.querySelector(".AltLeft")




function changeLanguage() {
   let keyCode = window.event.code;
   keyboardRKey.forEach(element => {
      if (element.classList.contains(keyCode)) {
         if (lefttShift.classList.contains("activ") && keyCode == "AltLeft") {
            engSpan.forEach(element => {
               element.classList.add("none")
            });
            engSpanShift.forEach(element => {
               element.classList.add("none")
            });

            rusSpan.forEach(element => {
               element.classList.remove("none")
            });
         }

      }
   })
}
document.addEventListener("keydown", changeLanguage)
