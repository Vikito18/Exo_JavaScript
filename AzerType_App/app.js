const initialWord = ["paris", "noir", "renard"];

let score = 0;

// ============================================
// EXO CONDITION
// ============================================
// let sentence = prompt("enter le mot : " + initialWord[0]);
// if (sentence === initialWord[0]) {
//   score++;
//   console.log("Well done !");
//   console.log("score = " + score);
// } else {
//   console.log("Try again !");
//   console.log("score = " + score);
// }

// sentence = prompt("enter le mot : " + initialWord[1]);

// if (sentence === initialWord[1]) {
//   score++;
//   console.log("Well done !");
//   console.log("score = " + score);
// } else {
//   console.log("Try again !");
//   console.log("score = " + score);
// }

// sentence = prompt("enter le mot : " + initialWord[2]);

// if (sentence === initialWord[2]) {
//   score++;
//   console.log("Well done !");
//   console.log("score = " + score);
// } else {
//   console.log("Try again !");
//   console.log("score final = " + score + " sur " + initialWord.length);
// }

// ============================================
// EXO CONDITION BOUCLE FOR
// ============================================
for (let i = 0; i < initialWord.length; i++) {
  let sentence = prompt("enter le mot : " + initialWord[i]);
  if (sentence === initialWord[i]) {
    score++;
    console.log("Well done !");
  } else {
    console.log("Try again !");
  }
  console.log("score = " + score + " sur " + [i + 1]);
}
