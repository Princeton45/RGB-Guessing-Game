var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function(){
hard.classList.remove("selected");
easy.classList.add("selected");
numberSquares = 3;
colors = generateRandomColors(numberSquares);
    pickedCOlor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function(){
hard.classList.add("selected");
easy.classList.remove("selected");
    numberSquares = 6;
    colors = generateRandomColors(numberSquares);
    pickedCOlor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++){
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "block";
        }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numberSquares);
    //pick a new random color from arr
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    
    h1.style.backgroundColor = "steelblue";
});
                           

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initla colors to square
    //add quicklisteners to square
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        //grab color of cicked square
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
         this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Agian"
        }
        //compare color to pickedColor
    });
}

function changeColors(color){
    //loop throgh all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match to match given color
    squares[i].style.backgroundColor = color;
}
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors ot array
    for (var i = 0; i < num; i++){
           //get rnadom color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
   var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
   var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}