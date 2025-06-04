// let num = 30.54353243;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.pow(3,2));
// console.log(Math.sqrt(3));
// console.log(Math.abs(-3));
// console.log(Math.max(3,4,5,3,234,53,43,245,234,24,));
// console.log(Math.min(1,4,5,3,234,53,43,245,234,24,));
// console.log(Math.PI);
// console.log(Math.floor(Math.random().toFixed(2) * 6 + 1));


// let upperValue = 6;
// let lowerValue = 1;
// let resultValue = Math.floor(Math.random() * upperValue + lowerValue);

// console.log(resultValue);

let rotation = 0;
function rollDisc() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let imageSource = './assets/images/' + randomNumber + '.png';
    document.getElementById('roll_img').src = imageSource;
    rotation += 360;
    document.getElementById('roll_img').style.transform = `rotate(${rotation}deg)`;
    document.getElementById('roll_img').style.transition = 'transform 0.5s ease-in-out';
}
