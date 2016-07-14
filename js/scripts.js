
$(document).ready(function() {
  $("#blanks").submit(function() {
var sentence=$("input#sentence").val();




var splitSentence= sentence.split(" ");
splitSentence.forEach(function(word) {
return word;
});

var shortWords= [];
var threeWord= word.length >= 3;
  if(word.length >= 3){
  return shortWords.push(threeWord);
} else{
  return shortWords;
}



var strReverse = shortWords.reverse().join(', ');
alert('You said ' + strReverse + '!');
});
});
