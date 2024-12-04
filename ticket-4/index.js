// The code within `ticket-4/index.js` is meant to return a grade based on the value of `points` (as per the table below), but currently it doesn't.
// You and your team should fix the code so that the function returns the correct grade.

// Running the file should also log the following to the console:

// > A should be A

//if greater than or equal to 90(90-100) = A
//else if greater than or equal to 70(70-89) = B
// if points is less than or equal to 70(1-70) = B

function getGradeFromPoints(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  }
  return "E";
}

let grade = getGradeFromPoints(90);
console.log(grade, "should be A");
