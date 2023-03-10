const COLOR_RANGE = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const HEX_LETTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const getNColors = (n, type) => {
  const colors = [];
  for (let i = 0; i < n; i++) {
    if (!type) {
      type = randNumber(0, 1) ? 'hex' : 'hsl';
    }

    if (type === 'hex') {
      colors.push(getRandomHexCode());
    }
    if (type === 'hsl') {
      colors.push(getRandomHSL());
    }
  }
  return colors;
};

const getRandomHexCode = () => {
  let hex = '';
  while (hex.length < 6) {
    hex += HEX_LETTERS[randNumber(0, HEX_LETTERS.length - 1)];
  }
  return `#${hex}`;
};

const getRandomHSL = () => {
  const hue = COLOR_RANGE[randNumber(0, COLOR_RANGE.length - 1)];
  const sat = randNumber(80, 100);
  const lightness = randNumber(50, 80);
  return `hsl(${hue}, ${sat}%, ${lightness}%)`;
};

const randNumber = (lower, upper) => Math.floor(Math.random() * (upper - lower + 1) + lower);
