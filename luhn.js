//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  input = input.split(" ").join("");

  if (input.length <= 1) {
    return false;
  }

  console.log(`Trimmed Input: ${input}`);

  let isEven;
  isEven = input.length % 2 == 0;

  const doubledNumbers = [];
  let otherSum = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    if (isNaN(input.charAt(i))) {
      return false;
    }

    const numberAtIndex = Number(input.charAt(i));

    if (isEven) {
      if (i % 2 == 0) {
        let doubledNumber = numberAtIndex * 2;

        if (doubledNumber > 9) {
          doubledNumber -= 9;
        }

        doubledNumbers.push(doubledNumber);
      } else {
        otherSum += numberAtIndex;
      }

      // EVEN:
      // Values: 5, 3, 3, 8, 8, 6
      // Indexs: 0, 1, 2, 3, 4, 5
    } else {
      if (i % 2 == 1) {
        let doubledNumber = numberAtIndex * 2;

        if (doubledNumber > 9) {
          doubledNumber -= 9;
        }

        console.log(
          `Doubled Number Result: ${doubledNumber} for number ${numberAtIndex} at index ${i}`
        );

        doubledNumbers.push(doubledNumber);
      } else {
        otherSum += numberAtIndex;
      }

      // ODD:
      // Values: 6, 8, 7, 6, 3
      // Index:  0, 1, 2, 3, 4
    }
  }

  let total = 0;

  doubledNumbers.forEach((num) => {
    total += num;
  });

  total += otherSum;

  console.log(`total: ${total}`);

  return total % 10 === 0;

  // throw new Error("Remove this statement and implement this function");
};
