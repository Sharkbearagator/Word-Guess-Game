var wins = ["Wins: 1","Wins: 2","Wins: 3","Wins: 4","Wins: 5","Wins: 6","Wins: 7","Wins: 8","Wins: 9","Wins: 10"]
var guessRemains = ["Guesses Remaining: 1","Guesses Remaining: 2","Guesses Remaining: 3","Guesses Remaining: 4","Guesses Remaining: 5" ,"Guesses Remaining: 6","Guesses Remaining: 7","Guesses Remaining: 8","Guesses Remaining: 9","Guesses Remaining: 10","Guesses Remaining: 11","Guesses Remaining: 12"]
var guessLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var bandNames = ["green-day", "linkin-park","gorillaz","eminem","fall-out-boy"]
$(document).on(function() {


    $("#guesses").on(KeyboardEvent);{
        for(var i = 11; i <= guessRemains.length; i--){
        $("#guesses").html(guessRemains[i]);    
            }
    }
}
    )
