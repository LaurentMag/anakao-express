"use strict";

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
  "Andavadoaka",
  "Salary bay",
  "Ifaty",
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

// Add Listener
const whereToAddListener = document.querySelectorAll(".js-buttons-container");
for (let elementToListen of whereToAddListener) {
  elementToListen.addEventListener("click", funcPrincipalChange);
}

// VARIABLES___________________________________________________________________________

// All buttons
const buttonNodeList = document.querySelectorAll(".general__button");

const articleToFade = document.querySelectorAll(".js-trajets-article");
//Nodelist of all img, h2, p element to change content
const imgToChange = document.querySelectorAll(".js-trajets-article__img");
const hToChange = document.querySelectorAll(".js-trajets-article__h2");
const pToChange = document.querySelectorAll(".js-trajets-article__p");

let elemIndexForContentChange = -1;
/* ---------------------------- */
let loopEffectStart = -1;
let loopEffectLimit = -1;
let stop = -1;

// FUNCTION : ANNEXE___________________________________________________________________________
// add & remove button on click effect
function addAndRemoveEffect(clickedButton, classToAddAndRemove) {
  clickedButton.classList.add(classToAddAndRemove);

  for (let i = loopEffectStart; i <= loopEffectLimit; i++) {
    if (buttonNodeList[i] == clickedButton) {
      continue;
    }
    if (buttonNodeList[i].classList.contains(classToAddAndRemove)) {
      buttonNodeList[i].classList.remove(classToAddAndRemove);
    }
  }
}
/* ---------------------------- */
// fade out - change content - fade in
function fadeInAndOutChangeContent(fadingClass, elementIndex, contentIndex) {
  articleToFade[elementIndex].classList.add(fadingClass);

  setTimeout(function () {
    imgToChange[elementIndex].src = imgTrajetsArray[contentIndex];
    hToChange[elementIndex].innerHTML = hTrajetsArray[contentIndex];
    pToChange[elementIndex].innerHTML = pTrajetsArray[contentIndex];

    articleToFade[elementIndex].classList.remove(fadingClass);
  }, 100);
}

// FUNCTION : MAIN___________________________________________________________________________
function funcPrincipalChange(paramFunc) {
  let whichButton = paramFunc.target;

  let buttonNumber = Number(whichButton.classList.value.match(/[0-9]/)[0]);

  if (whichButton.tagName == "BUTTON") {
    // Apply all change
    if (stop != buttonNumber && !whichButton.classList.contains("button-effect-on-click")) {
      //map1
      if (buttonNumber >= 0 && buttonNumber <= 2) {
        elemIndexForContentChange = 0;
        loopEffectStart = 0;
        loopEffectLimit = 2;
      }
      //map2
      if (buttonNumber >= 3 && buttonNumber <= 5) {
        elemIndexForContentChange = 1;
        loopEffectStart = 3;
        loopEffectLimit = 5;
      }
      //map3
      if (buttonNumber >= 6 && buttonNumber <= 9) {
        elemIndexForContentChange = 2;
        loopEffectStart = 6;
        loopEffectLimit = 9;
      }

      stop = buttonNumber;
      addAndRemoveEffect(whichButton, "button-effect-on-click");
      fadeInAndOutChangeContent("trajet__article-fade", elemIndexForContentChange, buttonNumber);
    }
  }

  // annexeBordelTest();
}

//___________________________________________________________________________
function annexeBordelTest() {
  let buttonMap0NodeList = whereToAddListener[0].querySelectorAll(".general__button");

  // let buttonmap0ToArray = Array.from(buttonMap0NodeList);

  let buttonNumArray = [];
  buttonMap0NodeList.forEach((nodeListElement) => {
    let numero = Number(nodeListElement.classList.value.match(/[0-9]/)[0]);
    buttonNumArray.push(numero);

    // console.log("numero to push into array :", numero);
  });

  // console.log(buttonNumArray);
}
