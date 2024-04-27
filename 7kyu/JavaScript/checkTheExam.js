/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

// method 1: arrow functions, forEach, conditionals
const checkExam = (correct, student) => {
  let score = 0;
  student.forEach((x, i) => {
    if(x === '') {
      score += 0;
    } else if(x !== correct[i]) {
      score -= 1;
    } else if (x === correct[i]) {
      score += 4;
    };
 });
  return score > 0 ? score : 0;
};

// method 2: arrow fns, forEach, ternary expression instead to be more concise
const checkExam = (correct, student) => {
  let score = 0;
  student.forEach((x, i) => x === '' ? score += 0 : (x !== correct[i]) ? score -= 1 :score += 4);
  return score > 0 ? score : 0;
};
