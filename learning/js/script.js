// const body = document.body;

// setTimeout(() => {
//   body.style.backgroundColor = "grey";
//   setTimeout(() => {
//     body.style.backgroundColor = "blue";
//     setTimeout(() => {
//       body.style.backgroundColor = "orange";
//       setTimeout(() => {
//         body.style.backgroundColor = "indigo";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// delayedColorchange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorchange("red", 1000, () => {
//   delayedColorchange("blue", 1000, () => {
//     delayedColorchange("green", 1000, () => {
//       delayedColorchange("pink", 1000, () => {
//         delayedColorchange("yellow", 1000, () => {});
//       });
//     });
//   });
// });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => {
    delayedColorChange("orange", 1000);
  })
  .then(() => {
    delayedColorChange("yellow", 1000);
  })
  .then(() => {
    delayedColorChange("green", 1000);
  })
  .then(() => {
    delayedColorChange("blue", 1000);
  })
  .then(() => {
    delayedColorChange("indigo", 1000);
  })
  .then(() => {
    delayedColorChange("violet", 1000);
  });
