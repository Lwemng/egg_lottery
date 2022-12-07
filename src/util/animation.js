// // JS 实现动画帧
// export const ballsPositions = [
//   "0 0",
//   "-562.5 0",
//   "0 -398",
//   "-562.5 -398",
//   "-1125 0",
//   "-1125 -398",
//   "0 -804",
//   "-562.5 -804",
//   "-1125 -804",
//   "0 -1202",
//   "-562.5 -1202",
//   "-1125 -1208",
//   "-1687.5 0",
//   "-1687.5 -406",
//   "-1687.5 -804",
//   "-1687.5 -1202",
//   "0 -1600",
//   "-562.5 -1600",
//   "-1125 -1600",
//   "-1687.5 -1600"
// ];

// export default function animation(ele, positions) {
//   var index = 0;
//   function run() {
//     var position = positions[index].split(" ");
//     ele.style.backgroundPositionX = `${position[0]}px`;
//     ele.style.backgroundPositionY = `${position[1]}px`;
//     index++;
//     if (index === positions.length) {
//       return;
//     }
//     setTimeout(run, 50);
//   }
//   run();
// }
