const randomImgNumber = Math.floor(Math.random() * 19) + 1;
const randomImg = `${randomImgNumber}` + ".jpg";
const bgImage = document.createElement("img");

bgImage.src = `img/${randomImg}`;
document.body.appendChild(bgImage);
