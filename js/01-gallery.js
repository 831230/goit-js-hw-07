import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const urlSmallArr = [];
const urlBigArr = [];
const altDescriptionArr = [];

for (let galleryItem of galleryItems) { 
    urlSmallArr.push(galleryItem.preview);
    urlBigArr.push(galleryItem.original);
    altDescriptionArr.push(galleryItem.description);
    const galleryDivItem = document.createElement("div");
    galleryContainer.prepend(galleryDivItem);
    const galleryLink = document.createElement("a");
    galleryDivItem.prepend(galleryLink);
    const galleryImg = document.createElement("img");
    galleryLink.prepend(galleryImg);
    galleryDivItem.classList.add("gallery__item");
    galleryLink.classList.add("gallery__link");
    galleryImg.classList.add("gallery__image");
};

const imagesArr = document.querySelectorAll(".gallery__image");
const galleryLinkArr = document.querySelectorAll(".gallery__link");
const galleryImgArr = document.querySelectorAll(".gallery__image");

for (let i = 0; i < imagesArr.length; i++) { 
    galleryLinkArr[i].setAttribute("href", urlBigArr[i]);
    console.log(galleryLinkArr[i]);
    galleryImgArr[i].src = urlSmallArr[i];
    galleryImgArr[i].setAttribute("data-source", urlBigArr[i]);
    galleryImgArr[i].setAttribute("alt", altDescriptionArr[i]);
};


// const example = basicLightbox.create(document.querySelector(".gallery__image"));

// document.querySelector(".gallery__link").onclick = () => { 
//     basicLightbox.create(
//       `<img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">`
//     ).show()
// }

// const instance = basicLightbox.create(
//   `<img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">`
// );
// instance.show();