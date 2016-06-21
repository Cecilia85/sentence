
$(document).ready(function() {
  $("#blanks").submit(function() {
var sentence=$("input#sentence").val();



var shortWords=[];
var splitSentence= sentence.split(" ");
splitSentence.forEach(function(word) {

  if(word.length >= 3){
  return(shortWords);
}


});
var strReverse = shortWords.reverse().join(', ');
alert('You said ' + strReverse + '!');
});
});
