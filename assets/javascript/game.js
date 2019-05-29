var wins = 0;
var guessRemains = 12
var guessLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var bandNames = ["Green Day" ,"Linkin Park","Gorillaz","Eminem","Fall Out Boy"];
var random = bandNames[Math.floor(Math.random()*bandNames.length)];
var answerArray = [];

document.getElementById("#answer") === random;

for (var i = 0; i < random.length; i++) {
    answerArray[i] = "_";
   }
   var remainingLetters = random.length;

document.onkeyup = function(e){
    var letter = e.key.toLowerCase();
    console.log(letter);
    for(var i = 0; i < bandNames.length; i++){
        if(random[i] === letter){
            answerArray[i] = letter;
            remainingLetters--;
            document.getElementById("#word") === random;
        }
    }
}


if(document.getElementById("#word") === random){
    wins++
}
console.log(random);
