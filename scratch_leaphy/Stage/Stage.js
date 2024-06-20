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
  [-20, 138, 98], // 0
  // [29, 131, 93], // 1
  [77, 131, 86], // 2
  [126, 144, 70], // 3
  [169, 146, 134], // 4
  [189, 124, -130], // 5
  [149, 100, -124], // 6
  // [115, 75, -172],  // 7
  [136, 40, 95], // 8
  [179, 37, 147], // 9
  [193, 6, -176], // 10
  // [187, -32, 169],  // 11
  [203, -65, 169],  // 12
  [204, -98, -126], // 13
  [163, -101, -65], // 14
  // [123, -85, -105], // 15
  [95, -111, -158],   // 16
  [77, -145, -118],   // 17
  [40, -145, -29],  // 18
  // [16, -108, -104],  // 19
  [-15, -133, -118],  // 20
  [-53, -139, -33], // 21
  // [-67, -103, -63],  // 22
  [-111, -106, -145], // 23
  [-128, -140, -145], // 24
  [-166, -156, -57],  // 25
  [-187, -131, 9],  // 26
  // [-177, -99, 19],  // 27
  [-180, -61, 4], // 28
  [-163, -33, 60],  // 29
  [-130, -33, 159], // 30
  // [-104, -67, 78], // 31
  [-69, -46, 56], // 32
  [-30, -33, 125],  // 33
  // [-2, -65, 102],  // 34
  [41, -68, 78],  // 35
  // [86, -58, 43], // 36
  // [78, -20, -72], // 37
  [30, -19, -81], // 38
  [-1, -4, -8], // 39
  [21, 17, 72], // 40
  // [69, 24, 49], // 41
  // [68, 59, -75], // 42
  [21, 59, -59],   // 43
  [-17, 80, -59], // 44
  [-55, 101, -69],  // 45
  // [-109, 101, -153], // 46
  [-110, 63, 152], // 47
  [-85, 33, 161], // 48
  [-89, 4, -113], // 49
  [-122, 11, -39],    // 50
  // [-149, 44, -92],  // 51
  [-192, 41, -42], // 52
  [-199, 69, 13], // 53
  [-189, 104, 13],  // 54
  [-166, 131, 80],  // 55
  [-117, 134, 80],  // 56
  //[-69, 136, 86]  // 57
  [-20, 138, 98], // 0
  [-20, 138, 98], // 0
  [-20, 138, 98], // 0
  [-20, 138, 98], // 0
  [-20, 138, 98], // 0
  [-20, 138, 98], // 0
  [-20, 138, 98], // 0
  [-20, 138, 98], // 0
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

