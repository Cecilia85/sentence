
$(document).ready(function() {
  $("#blanks").submit(function() {
var sentence=$("input#sentence").val();




var splitSentence= sentence.split(" ");
splitSentence.forEach(function(word) {
  return(word);
  // var shortWords=word.size(3);


});
var strReverse = splitSentence.reverse().join('');
alert('You said ' + splitSentence + '!');
});
});
