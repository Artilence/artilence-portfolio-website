import { getRandomOddNumber } from "./getRandomOddNumber";

export const generateRandomArray = (letter: string) =>
  new Array(getRandomOddNumber())
    .fill(0)
    .map((_, index) => <span key={index}>{letter}</span>);
