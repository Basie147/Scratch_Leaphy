/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    // Default costumes commented out; can be removed if not needed
    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 219.84614999999235,
        y: 166.8125,
      }),
    ];
 
    // Adding event listener for 'templateButton'
    document.getElementById("templateButton").addEventListener("click", () => {
      const template = document.getElementById("template").value;
      let xCoordinate = 220; // Default x coordinate (used unless template is "2")
      let yCoordinate = 166; // Default y coordinate (used unless template is "2")

      if (template === "2") {
        xCoordinate = 240; // Change x to 200 if template is "2"
        yCoordinate = 180; // Change y to 150 if template is "2"
  
       
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

