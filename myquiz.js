let object = [{
  question: "What is my nickname?",
  answer: "Lovekush"
},

{
  question:"What is my favariote color?",
  answer:"Yellow"
},

{
  question:"where do I live?",
  answer:"Allahabad"
},

{
  question:"where is my village?",
  answer:"Rokari"
},
{
  question:"Who is my favourite coder?",
  answer:"Tanay Pratap"
}
]

var score = 0;

var temp = require('readline-sync');


while (true) {
  var userName = temp.question("Please enter your name:")
  if (!userName) {
    console.log("Something is wrong Please Enter correct user name");
    continue;
  }
  console.log("Welcome", userName);
  break;
}
console.log("Lets Play a quiz. Do you know me?")

for (i = 0; i < object.length; i++) {
  console.log();
  var input = temp.question(object[i].question);
  console.log("score:" + quiz(object[i].answer, input));

}
console.log("Final score:" + score);

function quiz(answer, useranswer) {
  if (answer === useranswer) {
    return ++score;
  }
  else{
    return "Your answer is wrong"
  }
}
