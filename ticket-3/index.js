function countNumberOfNinesInNumber(number) {
  let count = 0;

  number = number.toString();

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}
