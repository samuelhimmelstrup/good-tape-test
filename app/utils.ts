/**
 * Shuffles an array in place using the Fisher-Yates algorithm,
 * ensuring that every permutation is equally likely.
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export const shuffleArray = (array: number[]): number[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
