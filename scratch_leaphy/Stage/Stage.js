import {
  Stage as StageBase, Costume,  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    // Default costumes; can be removed if not needed
    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 210,
        y: 160,
      }),
    ];

    // Adding event listener for 'templateButton'
    document.getElementById("templateButton").addEventListener("click", () => {
      const template = document.getElementById("template").value;
      let xCoordinate = 220; // Default x coordinate
      let yCoordinate = 166; // Default y coordinate
      
      // Adjust coordinates based on the selected template
      if (template === "1") {
        xCoordinate = 210; // x coordinate for template "1"
        yCoordinate = 160; // y coordinate for template "1"
      } else if (template === "2") {
        xCoordinate = 240; // x coordinate for template "2"
        yCoordinate = 180; // y coordinate for template "2"
      } else if (template === "5") {
        xCoordinate = 240; // x coordinate for template "5"
        yCoordinate = 180; // y coordinate for template "5"
      } else if (template === "6") {
        xCoordinate = 100; // x coordinate for template "6"
        yCoordinate = 100; // y coordinate for template "6"
      }

      // Update costumes based on the selected template
      this.costumes = [
        new Costume(`backdrop${template}`, `./Stage/costumes/backdrop${template}.svg`, {
          x: xCoordinate,
          y: yCoordinate,
        }),
      ];
    });

    // Sound array
    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    // Empty triggers array; can be populated as necessary
    this.triggers = [];
  }
}


export const data = [
  [-20, 138, 98],   // 0
  [77, 131, 86],    // 1
  [126, 144, 70],   // 2
  [169, 146, 134],  // 3
  [189, 124, -130], // 4
  [149, 100, -124], // 5
  [136, 40, 95],    // 6
  [179, 37, 147],   // 7
  [193, 6, -176],   // 8
  [203, -65, 169],  // 9
  [204, -98, -126], // 10
  [163, -101, -65], // 11
  [95, -111, -158], // 12
  [77, -145, -118], // 13
  [40, -145, -29],  // 14
  [-15, -133, -118],// 15
  [-53, -139, -33], // 16
  [-111, -106, -145],// 17
  [-128, -140, -145],// 18
  [-166, -156, -57], // 19
  [-187, -131, 9],  // 20
  [-180, -61, 4],   // 21
  [-163, -33, 60],  // 22
  [-130, -33, 159], // 23
  [-69, -46, 56],   // 24
  [-30, -33, 125],  // 25
  [41, -68, 78],    // 26
  [30, -19, -81],   // 27
  [-1, -4, -8],     // 28
  [21, 17, 72],     // 29
  [21, 59, -59],    // 30
  [-17, 80, -59],   // 31
  [-55, 101, -69],  // 32
  [-110, 63, 152],  // 33
  [-85, 33, 161],   // 34
  [-89, 4, -113],   // 35
  [-122, 11, -39],  // 36
  [-192, 41, -42],  // 37
  [-199, 69, 13],   // 38
  [-189, 104, 13],  // 39
  [-166, 131, 80],  // 40
  [-117, 134, 80],  // 41
  [-20, 138, 98],   // 0
  [-20, 138, 98],   // 0
  [-20, 138, 98],   // 0
  [-20, 138, 98],   // 0
  [-20, 138, 98],   // 0
  [-20, 138, 98],   // 0
  [-20, 138, 98],   // 0
  [-20, 138, 98],   // 0
];
