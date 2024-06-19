/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export const data = [
  [-20, 138, 98],
  [29, 131, 93],
  [77, 131, 86],
  [126, 144, 70],
  [169, 146, 134],
  [189, 124, -130],
  [149, 100, -124],
  [115, 75, -172],
  [136, 40, 95],
  [179, 37, 147],
  [193, 6, -176],
  [187, -32, 169],
  [203, -65, 169],
  [204, -98, -126],
  [163, -101, -65],
  [123, -85, -105],
  [95, -111, -158],
  [77, -145, -118],
  [40, -145, -29],
  [16, -108, -104],
  [-15, -133, -118],
  [-53, -139, -33],
  [-67, -103, -63],
  [-111, -106, -145],
  [-128, -140, -145],
  [-166, -156, -57],
  [-187, -131, 9],
  [-177, -99, 19],
  [-180, -61, 4],
  [-163, -33, 60],
  [-130, -33, 159],
  [-104, -67, 78],
  [-69, -46, 56],
  [-30, -33, 125],
  [-2, -65, 102],
  [41, -68, 78],
  [86, -58, 43],
  [78, -20, -72],
  [30, -19, -81],
  [-1, -4, -8],
  [21, 17, 72],
  [69, 24, 49],
  [68, 59, -75],
  [21, 59, -59],
  [-17, 80, -59],
  [-55, 101, -69],
  [-109, 101, -153],
  [-110, 63, 152],
  [-85, 33, 161],
  [-89, 4, -113],
  [-122, 11, -39],
  [-149, 44, -92],
  [-192, 41, -42],
  [-199, 69, 13],
  [-189, 104, 13],
  [-166, 131, 80],
  [-117, 134, 80],
  [-69, 136, 86]
];

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    // Default costumes commented out; can be removed if not needed
    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 210,
        y: 160,
      }),
    ];
 
    // Adding event listener for 'templateButton'
    document.getElementById("templateButton").addEventListener("click", () => {
      const template = document.getElementById("template").value;
      let xCoordinate = 220; // Default x coordinate (used unless template is "2")
      let yCoordinate = 166; // Default y coordinate (used unless template is "2")
      if (template === "1") {
        xCoordinate = 210; // Change x to 200 if template is "2"
        yCoordinate = 160; // Change y to 150 if template is "2"

        
      }
     
      
      if (template === "2") {
        xCoordinate = 240; // Change x to 200 if template is "2"
        yCoordinate = 180; // Change y to 150 if template is "2"


      }
      if (template === "5") {
        xCoordinate = 240; // Change x to 200 if template is "2"
        yCoordinate = 180; // Change y to 150 if template is "2"
      }

      if (template === "6") {
        xCoordinate = 100; // Change x to 200 if template is "2"
        yCoordinate = 100; // Change y to 150 if template is "2"
      }
      this.costumes = [
        new Costume(`backdrop${template}`, `./Stage/costumes/backdrop${template}.svg`, {
          x: xCoordinate,  // Use 200 if template is "2", else use 220
          y: yCoordinate,  // Use 150 if template is "2", else use 166
        }),
      ];
    });
    
    // Sound array
    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    // Empty triggers array, can be populated as necessary
    this.triggers = [];
  }
}

