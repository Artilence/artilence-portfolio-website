export function getRandomOddNumber() {
    const min = 1;
    const max = 7;

    // Generate a random number between min and max (inclusive)
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    // Make sure the number is odd
    if (randomNum % 2 === 0) {
      // If it's even, add 1 to make it odd
      randomNum++;
    }

    return randomNum;
  }