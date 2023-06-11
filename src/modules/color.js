const getRandomColor = () => {
  const minBrightness = 50;
  const maxBrightness = 200; // Maximum brightness value (0-255)
  const maxAlpha = 1; // Maximum alpha value (1 for fully opaque)
  const minAlpha = 0; // Minimum alpha value (0 for fully transparent)

  let red;
  let green;
  let blue;
  let alpha;
  let isDullColor = true;

  while (isDullColor) {
    red = Math.floor(Math.random() * (maxBrightness - minBrightness + 1) + minBrightness);
    green = Math.floor(Math.random() * (maxBrightness - minBrightness + 1) + minBrightness);
    blue = Math.floor(Math.random() * (maxBrightness - minBrightness + 1) + minBrightness);
    alpha = Math.random() * (maxAlpha - minAlpha) + minAlpha;

    isDullColor = red < minBrightness / 2 && green < minBrightness / 2 && blue < minBrightness / 2;
  }

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
export default getRandomColor;
