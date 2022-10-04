const rainbowColor = (color, delay, doNext) => {
  setInterval(() => {
    document.body.style.backgroundColor = color;
    doNext && doNext();
  }, delay);
};

rainbowColor("red", 1000, () => {
  rainbowColor("orange", 1000, () => {
    rainbowColor("yellow", 1000, () => {
      rainbowColor("green", 1000, () => {
        rainbowColor("blue", 1000, () => {
          rainbowColor("indigo", 1000, () => {
            rainbowColor("violet", 1000, () => {});
          });
        });
      });
    });
  });
});

// const rainbowColor = (color, delay) => {
//   new Promise((resolve, reject) => {
//     setInterval(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// rainbowColor("red", 1000)
//   .then(() => rainbowColor("orange", 1000))
//   .then(() => rainbowColor("yellow", 1000))
//   .then(() => rainbowColor("green", 1000))
//   .then(() => rainbowColor("blue", 1000))
//   .then(() => rainbowColor("indigo", 1000))
//   .then(() => rainbowColor("violet", 1000));

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
