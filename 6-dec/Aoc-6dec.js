const inputArr = [
  1, 3, 1, 5, 5, 1, 1, 1, 5, 1, 1, 1, 3, 1, 1, 4, 3, 1, 1, 2, 2, 4, 2, 1, 3, 3,
  2, 4, 4, 4, 1, 3, 1, 1, 4, 3, 1, 5, 5, 1, 1, 3, 4, 2, 1, 5, 3, 4, 5, 5, 2, 5,
  5, 1, 5, 5, 2, 1, 5, 1, 1, 2, 1, 1, 1, 4, 4, 1, 3, 3, 1, 5, 4, 4, 3, 4, 3, 3,
  1, 1, 3, 4, 1, 5, 5, 2, 5, 2, 2, 4, 1, 2, 5, 2, 1, 2, 5, 4, 1, 1, 1, 1, 1, 4,
  1, 1, 3, 1, 5, 2, 5, 1, 3, 1, 5, 3, 3, 2, 2, 1, 5, 1, 1, 1, 2, 1, 1, 2, 1, 1,
  2, 1, 5, 3, 5, 2, 5, 2, 2, 2, 1, 1, 1, 5, 5, 2, 2, 1, 1, 3, 4, 1, 1, 3, 1, 3,
  5, 1, 4, 1, 4, 1, 3, 1, 4, 1, 1, 1, 1, 2, 1, 4, 5, 4, 5, 5, 2, 1, 3, 1, 4, 2,
  5, 1, 1, 3, 5, 2, 1, 2, 2, 5, 1, 2, 2, 4, 5, 2, 1, 1, 1, 1, 2, 2, 3, 1, 5, 5,
  5, 3, 2, 4, 2, 4, 1, 5, 3, 1, 4, 4, 2, 4, 2, 2, 4, 4, 4, 4, 1, 3, 4, 3, 2, 1,
  3, 5, 3, 1, 5, 5, 4, 1, 5, 1, 2, 4, 2, 5, 4, 1, 3, 3, 1, 4, 1, 3, 3, 3, 1, 3,
  1, 1, 1, 1, 4, 1, 2, 3, 1, 3, 3, 5, 2, 3, 1, 1, 1, 5, 5, 4, 1, 2, 3, 1, 3, 1,
  1, 4, 1, 3, 2, 2, 1, 1, 1, 3, 4, 3, 1, 3,
];

let fishCountdown = {};
for (let i = 0; i <= 8; i++) {
  let count = 0;
  for (const num of inputArr) {
    if (i === num) {
      count++;
    }
  }
  fishCountdown[i] = count;
}

for (let d = 1; d <= 256; d++) {
  let fishToday = {};
  for (let i = 0; i <= 7; i++) {
    fishToday[i] = fishCountdown[i + 1];
  }
  fishToday[8] = fishCountdown[0];
  fishToday[6] += fishCountdown[0];
  fishCountdown = fishToday;
}

let totalFish = 0;
for (const [key, value] of Object.entries(fishCountdown)) {
  totalFish += value;
}
console.log("total fish is", totalFish);
