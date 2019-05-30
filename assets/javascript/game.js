//set var and arrays
var wins = 0;
var guessRemains = 12
var guessLetters = []
//add pictures to each band name in objects
var bandNames = ["greenday", "linkinpark", "gorillaz", "eminem", "falloutboy"];
var random = bandNames[Math.floor(Math.random()*bandNames.length)];
var answerArray = [];
var answerCheck = answerArray;



//Set the answer array to _ _ _ _ _ and random word length
for (var i = 0; i < random.length; i++) {
    console.log(random[i]);
        answerArray[i] = "_";
   }
   var remainingLetters = random.length;
  

//Get user imput and indentify what letter it is
document.onkeyup = function(e){
    var letter = e.key.toLowerCase();
    guessLetters.push(letter);
    console.log(guessLetters);
    console.log(letter);
    
    //compare the letter to answers letters
    for(var i = 0; i < random.length; i++){
        if(random[i] === letter){
            answerArray[i] = letter;
            remainingLetters--;
        }
        
        
    }
    //if correct update wins, show picture, and reset
  for(var j = 0; j< random.length;)
    if(answerCheck===answerArray){
        wins++;
        reset();
    }
        
    
    //if run out of guesses reset
    guessRemains--
    if(guessRemains === -1){
        alert("You Lost");
        reset();
        document.getElementById("word").textContent = "_ _ _ _ _ _ _";
    }
    //update word if correct letters
    document.getElementById('word').textContent = answerArray;
    //change guess count and letters guessed
    document.getElementById('guesses').textContent = guessRemains;
    document.getElementById('guessed-letters').textContent = guessLetters;
    document.getElementById('wins').textContent = wins;
}




function reset(){
    guessRemains=12;
    answerArray= [];
    guessLetters= [];
}
console.log(random);
console.log(wins);