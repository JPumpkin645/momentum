const randomImgNumber = Math.floor(Math.random() * 6) + 1;
const randomImg = `${randomImgNumber}` + ".jpg";
const bgImage = document.createElement("img");

bgImage.src = `img/${randomImg}`;

document.body.appendChild(bgImage);
