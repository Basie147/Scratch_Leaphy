/* eslint-disable require-yield, eqeqeq */

import { Sprite, Trigger, Costume, Color } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
import { connectToSerial, registerListener } from '../Lib/serialFunctions.js';
import { csvFileData } from '../Lib/csv.js';

// Define the constant
const LEAPHYNUMBER = '4';
const COMMAND_NUMBER = '0';
const xpos = 20;
const ypos = -150;

export default class Leaphy4 extends Sprite {
  constructor(...args) {
    super(...args);
    this.costumes = [new Costume("Leaphy", "./Leaphy4/costumes/Leaphy.png", { x: 273, y: 258 })];
    this.triggers = [new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)];
  }

  *whenGreenFlagClicked() {
    // Setup event listeners
    registerListener(this);
    document.getElementById("connect").addEventListener("click", connectToSerial);
    document.getElementById("myButton").addEventListener("click", () => { button = !button; });

    // Set initial configurations
    this.goto(xpos, ypos);
    this.direction = 90;
    let button = false;
    let speed = 2.0;
    let turnDegree = 10;

    document.getElementById("speedButton").addEventListener("click", () => {
      speed = parseFloat(document.getElementById("speedInput").value);
      document.getElementById("speedValue").textContent = speed.toFixed(1).replace('.', ',');
    });

    document.getElementById("turnButton").addEventListener("click", () => {
      turnDegree = document.getElementById("turnInput").value;
      document.getElementById("turnValue").textContent = turnDegree;
    });

    // Interpret serial commands
    const interpretSerialCommands = (text) => {
      if (text.includes(COMMAND_NUMBER)) {
        if (text.includes('Forward')) this.move(speed);
        if (text.includes('stop')) this.move(0);
        if (text.includes('Right')) this.direction -= turnDegree;
        if (text.includes('Left')) this.direction += turnDegree;
      }
    };

    // Simulation loop
    while (true) {
      if (button) {
        const yellow = Color.rgb(255, 247, 0);
        const red = Color.rgb(255, 0, 0);
        const green = Color.rgb(0, 255, 21);
        const blue = Color.rgb(0, 94, 255);
        const purple = Color.rgb(153, 102, 255);
        const black = Color.rgb(0, 0, 0);
        const pink = Color.rgb(249, 0, 255);
        const lightGreen = Color.rgb(119, 180, 68);

        if (this.colorTouching(yellow, red)) { // Yellow touching red
     
          csvFileData.push([`Leaphy_${LEAPHYNUMBER} is touching red`, "Yellow"]);
          yield* this.wait(5);
          for (let i = 0; i < 20; i++) {this.move(2); yield;}
        }
        if (this.colorTouching(yellow, green)) { // Yellow touching green
         
          csvFileData.push([`Leaphy_${LEAPHYNUMBER} is touching green`, "Yellow"]);
          yield* this.wait(3);
          for (let i = 0; i < 20; i++) {this.move(2); yield;}
        }
        if (this.colorTouching(yellow, blue)) { // Yellow touching blue
         
          csvFileData.push([`Leaphy_${LEAPHYNUMBER} is touching bkye`, "Yellow"]);
          yield* this.wait(2);
          for (let i = 0; i < 20; i++) {this.move(2); yield;}
        }
        if (this.colorTouching(purple, black)) { // Purple touching black
          this.direction -= turnDegree;
        }
        if (this.colorTouching(Color.rgb(0, 255, 232), black)) {
          this.direction += turnDegree;
        }
        if (this.colorTouching(pink, lightGreen)) {  // Pink touching light green
          this.move(-speed);
        }
        this.move(speed);
      }
      yield;
    }
  }

  *moveAndWait(speed, steps) {
    for (let i = 0; i < steps; i++) {
      this.move(speed);
      yield;
    }
  }
}
