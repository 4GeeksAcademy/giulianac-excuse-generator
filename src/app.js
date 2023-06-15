/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.round(Math.random() * (who.length - 1))];
  let randomAction = action[Math.round(Math.random() * (action.length - 1))];
  let randomWhat = what[Math.round(Math.random() * (what.length - 1))];
  let randomWhen = when[Math.round(Math.random() * (when.length - 1))];
  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = "OMG! You will not believe me but... <br>" + excuse;
};

onload();
