/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Leaphy2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Leaphy", "./Leaphy2/costumes/Leaphy.png", {
        x: 273,
        y: 258,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(100, -150);
    this.direction = 90;

        // leaphy2.js
    document.addEventListener('DOMContentLoaded', function () {
      const button = document.getElementById('myButton');
      button.addEventListener('click', function() {
          console.log('Button clicked in leaphy2.js');
          // Add more logic here specific to leaphy2.js
      });
    });

    // if presed true or false
    var button = false;
    document.getElementById("myButton").addEventListener("click", () => {
      button = !button;
    });



//  simulation of the leaphy
    while (true) {
      if (button) {
        if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(255, 0, 0))) { //yellow touching red

          csvFileData.push(["Leaphy is touching red", "Yellow"]);
          console.log(csvFileData);

          yield* this.wait(5);
          for (let i = 0; i < 20; i++) {
            this.move(2);
            yield;
          }
        }
        if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(0, 255, 21))) { //yellow touching green
          csvFileData.push(["Leaphy is touching green", "Yellow"]);
          console.log(csvFileData);

          yield* this.wait(3);
          for (let i = 0; i < 20; i++) {
            this.move(2);
            yield;
          }
        }
        if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(0, 94, 255))) { //yellow touching blue
          csvFileData.push(["Leaphy is touching blue", "Yellow"]);
          console.log(csvFileData);
          yield* this.wait(2);
          for (let i = 0; i < 20; i++) {
            this.move(2);
            yield;
          }
        }
        if (this.colorTouching(Color.rgb(153, 102, 255), Color.rgb(0, 0, 0))) { //purple touching black
          this.direction -= 10;
        }
        if (this.colorTouching(Color.rgb(0, 255, 232), Color.rgb(0, 0, 0))) {
          this.direction += 10;
        }
        if (this.colorTouching(Color.rgb(249, 0, 255), Color.rgb(119, 180, 68))) {  //pink touching light green
          this.move(-2);
        }
        this.move(2);
      }
      yield;

    }
  }
}





