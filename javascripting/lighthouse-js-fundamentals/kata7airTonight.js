/*const checkAir = (samples, threshold) => {
  let dirtySamples = 0;

  for (i = 0; i < samples.length; i++);
  {
    if (samples[i] === "dirty") {
      dirtySamples++;
    } else if (threshold < dirtySamples / samples.length) {
      return "Poluted";
    } else {
      return "Clean";
    }
  }
};*/

const checkAir = (samples, threshold) => {
  let dirtySamples = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtySamples++;
    }
  }
  if (threshold < dirtySamples / samples.length) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
