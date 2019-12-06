// When you use class names to reference DOM
// elements, *always* prefix with "js-"
const thePic = document.querySelector(".js-picture");
const bunnyBtn = document.querySelector(".js-bunny");
const kittyBtn = document.querySelector(".js-kitty");

// #1. A reference to the .js-photo-container
const photoContainer = document.querySelector(".js-photo-container");

// #2. A function that can accept an image
//     path string and return an img DOM 
//     element, whose .src points to that 
//     image path
function imgWithPath(imgPath) {
    // Create an img element
    const img = document.createElement("img");
    // Set its path
    img.src = imgPath;
    // alternatively, we could call changePic!
    // changePic(img, imgPath);
    // Return the element
    return img;
}

function appendImageToContainer(imgEl) {
    photoContainer.appendChild(imgEl);
}

const images = [
    "images/bunny.jpg",
    "images/kitty.jpg"
];

// Use the `images` array
// and for each one, create an img element
// and display it on the page.



function changePic(aPic, imgPath) {
    aPic.src = imgPath;
}

function hello() {
    console.log("it works!!!!");
}

function showBunny() {
    changePic(thePic, "images/bunny.jpg");
}

function showKitty() {
    changePic(thePic, "images/kitty.jpg");
}

bunnyBtn.addEventListener("click", showBunny);
kittyBtn.addEventListener("click", showKitty);