/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import { connectToSerial, registerListener, unregisterListener } from '../Lib/serialFunctions.js';
import { csvFileData } from '../Lib/csv.js';

export default class Leaphy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Leaphy", "./Leaphy/costumes/Leaphy.png", { x: 273, y: 258 }),
    ];
    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  interpretSerialCommands(text) {
    if (text.includes('996189468')) {

    
      if (text.includes('Forward')) this.move(5);
      if (text.includes('stop')) this.move(0);
      if (text.includes('Right')) this.direction -= 10;
      if (text.includes('Left')) this.direction += 10;
    }
  }


  *whenGreenFlagClicked() {
    registerListener(this);
    document.getElementById("connect").addEventListener("click", connectToSerial);
    this.goto(140, -150);
    this.direction = 90;

    // if presed true or false
    var button = false;
    document.getElementById("myButton").addEventListener("click", () => {
     button =  true;
    } );




//  simulation of the leaphy
    while (true) {
      if (button) {
        if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(255, 0, 0))) { //yellow touching red

          csvFileData.push(["Leaphy is touching red", "Yellow"]);
       

          yield* this.wait(5);
          for (let i = 0; i < 20; i++) {
            this.move(2);
            yield;
          }
        }
        if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(0, 255, 21))) { //yellow touching green
          csvFileData.push(["Leaphy is touching green", "Yellow"]);
     
          yield* this.wait(3);
          for (let i = 0; i < 20; i++) {
            this.move(2);
            yield;
          }
        }
        if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(0, 94, 255))) { //yellow touching blue
          csvFileData.push(["Leaphy is touching blue", "Yellow"]);

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






