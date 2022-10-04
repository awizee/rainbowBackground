const colors = [
  "red",
  "green",
  "purple",
  "blue",
  "yellow",
  "orange",
  "pink",
  "black",
  "white",
  "gray",
];

const changeBg = (color) => {
  console.log(color);
  document.body.style.backgroundColor = color;
};

setInterval(() => {
  let i = Math.floor(Math.random() * 3);
  changeBg(colors[i]);
}, 3000);

// const randColor = () => {
//  setInterval(() => {
// 	 const r = Math.floor(Math.random() * 255);
// 	  const g = Math.floor(Math.random() * 255);
// 	  const b = Math.floor(Math.random() * 255);
// 	  const a = Math.random().toFixed(1);

// 	  const newColor = `rgba(${r}, ${g}, ${b}, ${a})`;
// 	  document.body.style.backgroundColor = newColor;
// }, 1000);
// };
// randColor();
