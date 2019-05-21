var wins = ["Wins: 1","Wins: 2","Wins: 3","Wins: 4","Wins: 5","Wins: 6","Wins: 7","Wins: 8","Wins: 9","Wins: 10"]
var guessRemains = [1,2,3,4,5,6,7,8,9,10,11,12]
var guessLetters = ['abcdefghijklmnopqrstuvwxyz'].split('')
var bandNames = ["green-day", "linkin-park","gorillaz","eminem","fall-out-boy"]






document.onkeyup = function(event){
    for(var i = 12; i > guessRemains.length; i--){
$("#guessRemains").html(guessRemains)
    }
}