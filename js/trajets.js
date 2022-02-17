"use strict";

// Add Listener
const whereToAddListener = document.querySelectorAll(".js-buttons-container");
for (let elementToListen of whereToAddListener) {
  elementToListen.addEventListener("click", funcPrincipalChange);
}

// CONTENT___________________________________________________________________________
let imgTrajetsArray = [
  "img/trajets/temp_isole-madagascar_d.jpg.image.1296.974.high.jpg",
  "img/trajets/temp_madagascar_d.jpg.image.1296.974.high.webp",
  "img/trajets/temp_1-nosy-be-madagascar-timbuktu-travel-10.avif",
  "img/trajets/temp_madagascar_d.jpg.image.1296.974.high.webp",
  "img/trajets/temp_General-andasibe-madagascar-timbuktu-travel-5.avif",
  "img/bungalowanakao2.jpg",
  "img/trajets/temp_1-nosy-be-madagascar-timbuktu-travel-9.avif",
  "img/trajets/temp_Black-and-white-ruffed-lemur-andasibe-madagascar-timbuktu-travel.avif",
  "img/trajets/temp_1-nosy-be-madagascar-timbuktu-travel-3.avif",
  "img/trajets/temp_madagascar_viaggi_sub.jpg",
];

let hTrajetsArray = [
  "Tulear",
  "St Augustin",
  "Anakao",
  "Ifaty",
  "Salary bay",
  "Andavadoaka",
  "Ambola",
  "Tsimanampetsotsa",
  "Nosy Ve",
  "Nosy Satrana",
];

let pTrajetsArray = [
  "TLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima rerum voluptatum iste nisi veritatis vel debitis perspiciatis cum, vitae totam! hic suscipit repellat aperiam explicabo",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis?",
  "Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis nulla harum officia? Eaque, pariatur",
  "TLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima rerum voluptatum iste nisi veritatis vel debitis perspiciatis cum, vitae totam! hic suscipit repellat aperiam explicabo",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis?",
  "Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis nulla harum officia? Eaque, pariatur",
  "TLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima rerum voluptatum iste nisi veritatis vel debitis perspiciatis cum, vitae totam! hic suscipit repellat aperiam explicabo",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis?",
  "Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis nulla harum officia? Eaque, pariatur",
  "Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis nulla harum officia? Eaque, pariatur",
];

// VARIABLES___________________________________________________________________________

// All buttons
const buttonNodeList = document.querySelectorAll(".general__button");

//Nodelist of all img, h2, p element to change content
const imgToChange = document.querySelectorAll(".js-trajets__img");
const hToChange = document.querySelectorAll(".js-trajets__h2");
const pToChange = document.querySelectorAll(".js-trajets__p");
/* ---------------------------- */
let contentToChangeIndex = -1;
let loopEffectStart = -1;
let loopEffectLimit = -1;
let stop = -1;


// FUNCTION : ANNEXE___________________________________________________________________________
// add & remove button on click effect
function addAndRemoveEffect(clickedButton, buttonClassToSkip, classToAddAndRemove) {
  clickedButton.classList.add(classToAddAndRemove);

  for (let i = loopEffectStart; i <= loopEffectLimit; i++) {
    if (buttonNodeList[i].classList.contains(buttonClassToSkip)) {
      continue;
    }
    if (buttonNodeList[i].classList.contains(classToAddAndRemove)) {
      buttonNodeList[i].classList.remove(classToAddAndRemove);
    }
  }
}
/* ---------------------------- */
// fade out - change content - fade in
function fadeInAndOutChangeContent(fadingClass, eIndexNum, cIndexNum, indexClassToFade) {
  let articleToFade = document.querySelectorAll(".js-principal-article")[indexClassToFade];

  articleToFade.classList.add(fadingClass);

  setTimeout(function () {
    imgToChange[eIndexNum].src = imgTrajetsArray[cIndexNum];
    hToChange[eIndexNum].innerHTML = hTrajetsArray[cIndexNum];
    pToChange[eIndexNum].innerHTML = pTrajetsArray[cIndexNum];
    articleToFade.classList.remove(fadingClass);
  }, 100);
}

// FUNCTION : MAIN___________________________________________________________________________
function funcPrincipalChange(paramFunc) {
  let whichButton = paramFunc.target;

  let buttonNumber = Number(whichButton.classList.value.match(/[0-9]/));
  let CurrentButtonClass = whichButton.classList.value.split(" ")[1];

  if (whichButton.tagName == "BUTTON") {
    //map1
    if (buttonNumber >= 0 && buttonNumber <= 2) {
      contentToChangeIndex = 0;
      loopEffectStart = 0;
      loopEffectLimit = 2;
    }
    //map2
    if (buttonNumber >= 3 && buttonNumber <= 5) {
      contentToChangeIndex = 1;
      loopEffectStart = 3;
      loopEffectLimit = 5;
    }
    //map3
    if (buttonNumber >= 6 && buttonNumber <= 9) {
      contentToChangeIndex = 2;
      loopEffectStart = 6;
      loopEffectLimit = 9;
    }

    // Apply all change
    if (stop != buttonNumber) {
      stop = buttonNumber;
      addAndRemoveEffect(whichButton, CurrentButtonClass, "button-on-click");
      fadeInAndOutChangeContent("trajet__article-fade", contentToChangeIndex, buttonNumber, contentToChangeIndex);
    }
  }
}
