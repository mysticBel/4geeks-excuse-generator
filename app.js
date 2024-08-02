window.onload = function () {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  function escogeAleatorio(array) {
    let randomPosition = Math.floor(Math.random() * array.length);
    return array[randomPosition];
  }

  let excuse =
    escogeAleatorio(who) +
    " " +
    escogeAleatorio(action) +
    " " +
    escogeAleatorio(what) +
    " " +
    escogeAleatorio(when);

  document.getElementById("excuse").innerHTML = excuse;
};
