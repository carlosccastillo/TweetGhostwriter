function writeTweet()
{
  var randIndex, sentence;
  var intro = ["Don't you just love", "The study of error is not", "We keep moving forward, opening new", "I have always hated"];
  var body = ["babies", "Barack Obama", "oysters", "global warming", "doors", "puddles"];
  var end = ["but the best thing in life is yourself.", "but seriously, you should really finish your homework."];
  randIndex = randomUpTo((intro.length)-1);
  sentence = intro[randIndex];
  randIndex = randomUpTo((body.length)-1);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo((end.length)-1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
