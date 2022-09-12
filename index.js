function Refresh(){
    let randomImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
    let randomNumber1 = Math.floor((Math.random() * randomImage.length) )
    let randomNumber2 = Math.floor((Math.random() * randomImage.length) )
    
    document.querySelector(".img1").src = randomImage[randomNumber1]
    document.querySelector(".img2").src = randomImage[randomNumber2]
    
    if(randomNumber1 < randomNumber2){
        document.getElementById("title").textContent = "Player 2 Wins"
    } else if(randomNumber1 === randomNumber2){
        document.getElementById("title").textContent = "It's a Tie "
    
    }else if(randomNumber1 > randomNumber2){
        document.getElementById("title").textContent = "Player 1 Wins"
    }

    document.getElementById("btn").textContent = "Play Again"
}
