var wins = 0;
var guessRemains = 12
var guessLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var bandNames = ["Green Day", "Linkin Park","Gorillaz","Eminem","Fall Out Boy"]
var random = bandNames[Math.floor(Math.random()*bandNames.length)];

$(random).html("#answer");

var html = ""
for(var j = 0; j < bandNames; j++){
    html +="<span data-letter=" + word.charAt(j) + "";
}

document.onkeyup = function(e){
    var letter = e.key.toLowerCase();
    for(var i = 0; i < bandNames.length; i++){
        if(letter === random.charAt(i)){
            var domLetter = document.getElementById(letter);
            domLetter.innerHTML = random.charAt(i);
        }
    }
}
console.log(random);