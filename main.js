let i = 0;
let images = [];
let time = 3000;

images[0] = "./images/1.jpg";
images[1] = "./images/2.jpg";
images[2] = "./images/3.jpg";
images[3] = "./images/4.jpg";
images[4] = "./images/5.jpg";
images[5] = "./images/6.jpg";
//console.log(images);

function slide() {
  //document.slide.src = images[i];
  let div = document.querySelector("div.slide");
  div.style = `background-image:url('./images/${i}.jpg')`;
  console.log(div);

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("slide()", time);
}

window.onload = slide();
