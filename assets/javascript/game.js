//set var and arrays
var wins = 0;
var guessRemains = 12
var guessLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var bandNames = ["Green Day" ,"Linkin Park","Gorillaz","Eminem","Fall Out Boy"];
var random = bandNames[Math.floor(Math.random()*bandNames.length)];
var answerArray = [];

//add pictures to each band name

//Set the answer array to _ _ _ _ _ and random word length
for (var i = 0; i < random.length; i++) {
    answerArray[i] = "_";
   }
   var remainingLetters = random.length;
  alert(answerArray.join(""));

//Get user imput and indentify what letter it is
document.onkeyup = function(e){
    var letter = e.key.toLowerCase();
    console.log(letter);
    //compare the letter to answers letters
    for(var i = 0; i < bandNames.length; i++){
        if(random[i] === letter){
            answerArray[i] = letter;
            remainingLetters--;
        }
    }
}



//change guess count and letters guessed

//update word if correct letters

//if run out of guesses show answer and reset

//if correct update wins, show picture, and reset

if(document.getElementById("#word") === random){
    wins++
}
console.log(random);
