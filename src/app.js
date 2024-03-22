/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  document.getElementById("excuse").innerHTML = excuseGenerator(
    who,
    action,
    what,
    when
  );

  console.log("Hello Rigo from the console!");
};

function excuseGenerator(who, action, what, when) {
  let whoAns = Math.floor(Math.random() * who.length + 1) - 1;
  let actionAns = Math.floor(Math.random() * action.length + 1) - 1;
  let whatAns = Math.floor(Math.random() * what.length + 1) - 1;
  let whenAns = Math.floor(Math.random() * when.length + 1) - 1;

  console.log(whoAns);
  console.log(actionAns);
  console.log(whatAns);
  console.log(whenAns);

  return (
    who[whoAns] +
    " " +
    action[actionAns] +
    " " +
    what[whatAns] +
    " " +
    when[whenAns]
  );
}
