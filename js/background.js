const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.style = `
position:absolute;
width:100%;
height:100%;
left: 0px;
top: 0px;
right:0px;
bottom:0px;
z-index: -1;
opacity:80%;
`;
bgImage.src = `img/${chosenImage}`;
document.body.append(bgImage);
