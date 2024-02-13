const imgArr = ['./cat1.jpg', './cat2.png', './cat3.png'];

let img = document.querySelector('#image');
let noBtn = document.querySelector('#noBtn');
let yesBtn = document.querySelector('#yesBtn');
let text = document.querySelector('#text');

img.src = imgArr[0];

noBtn.addEventListener('click', () => {
    img.src = imgArr[1];
    text.textContent = "Ти що задумала?"


    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

yesBtn.addEventListener('click', () => {
    img.src = imgArr[2];
    text.textContent = "Du bist mein Lieblings Kätzchen 🥰"

    noBtn.style.position = '';
    noBtn.style.visibility = 'hidden';
    yesBtn.style.visibility = 'hidden';
});
