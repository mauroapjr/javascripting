function loopyLighthouse(range, multiples, words) {
  for (let i = 15; i < 90; i++) if (range[i] / 2 === "Batty") return range;
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
