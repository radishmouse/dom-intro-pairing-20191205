// When you use class names to reference DOM
// elements, *always* prefix with "js-"
const thePic = document.querySelector(".js-picture");
const bunnyBtn = document.querySelector(".js-bunny");
const kittyBtn = document.querySelector(".js-kitty");

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