function getWordCount(speech) {
  var count = 0;
  for (var i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == " " && speech[i-1] !=" ") {
        count++;
    }
  }
  return count+1;
}
var speech = "I am a good person. I don't snore at night.";
var result = getWordCount(speech);
console.log("total word count is ", result);
