let randomImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
let randomNumber1 = Math.floor((Math.random() * randomImage.length) )
let randomNumber2 = Math.floor((Math.random() * randomImage.length) )

document.querySelector(".img1").src = randomImage[randomNumber1]
document.querySelector(".img2").src = randomImage[randomNumber2]