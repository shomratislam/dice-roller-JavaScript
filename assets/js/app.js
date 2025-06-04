let rotation = 0;
function rollDisc() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let imageSource = './assets/images/' + randomNumber + '.png';
    document.getElementById('roll_img').src = imageSource;
    rotation += 360;
    document.getElementById('roll_img').style.transform = `rotate(${rotation}deg)`;
    document.getElementById('roll_img').style.transition = 'transform 0.5s ease-in-out';
}
