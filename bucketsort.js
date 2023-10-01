// Function to perform Bucket Sort
function bucketSort(arr) {
  const n = arr.length;
  if (n === 0) {
    return arr; // Nothing to sort for an empty array
  }

  // Find the maximum and minimum values in the input array
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Create buckets and distribute elements into them
  const bucketCount = Math.floor((max - min) / 10) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < n; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / 10);
    buckets[bucketIndex].push(arr[i]);
  }

  // Sort each bucket (you can use another sorting algorithm here)
  for (let i = 0; i < bucketCount; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  // Combine the sorted buckets to get the final sorted array
  let index = 0;
  for (let i = 0; i < bucketCount; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bucketSort(unsortedArray);
console.log("Sorted Array (Bucket Sort):", sortedArray);
