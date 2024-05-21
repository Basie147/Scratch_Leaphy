import { Sprite, Trigger, Costume, Color } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
import { connectToSerial, registerListener } from '../Lib/serialFunctions.js';
import { csvFileData } from '../Lib/csv.js';

// Define the constant
const LEAPHYNUMBER = '5';

let COMMAND_NUMBER = '999999999';
document.getElementById("node-id_" + LEAPHYNUMBER).addEventListener('click', function() {
  COMMAND_NUMBER = document.getElementById("Leaphy-id_1").value;});

const xpos = 220 - LEAPHYNUMBER * 40;
const ypos = -150;

export default class Leaphy5 extends Sprite {
  constructor(...args) {
    super(...args);
    this.costumes = [new Costume("Leaphy", "./Leaphy5/costumes/Leaphy.png", { x: 273, y: 258 })];
    this.triggers = [new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)];
    this.speed = 2.0; // Define speed as a class property
    this.turnDegree = 10; // Define turnDegree as a class property
    this.button = false; // initialize as a class property
    this.frame = 1/30; // Define frame as a class property
 
    
  }

  // Interpret serial commands
  interpretSerialCommands = (text) => {
    if (text.includes(COMMAND_NUMBER)) {
      if (text.includes('Forward')) this.move(this.speed);
      if (text.includes('stop')) this.move(0);
      if (text.includes('Right')) this.direction -= this.turnDegree;
      if (text.includes('Left')) this.direction += this.turnDegree;
    }
  };

  *whenGreenFlagClicked() {
    // Setup event listeners
    registerListener(this);
    document.getElementById("connect").addEventListener("click", connectToSerial);
    document.getElementById("myButton").addEventListener("click", () => { this.button = !this.button; });
  
    this.goto(xpos, ypos);
    this.direction = 90;
  
    document.getElementById("speedButton").addEventListener("click", () => {
      this.speed = parseFloat(document.getElementById("speedInput").value);
      document.getElementById("speedValue").textContent = this.speed.toFixed(1).replace('.', ',');
    });
  
    document.getElementById("turnButton").addEventListener("click", () => {
      this.turnDegree = parseInt(document.getElementById("turnInput").value);
      document.getElementById("turnValue").textContent = this.turnDegree;
    });
   
    document.getElementById("framerateButton").addEventListener("click", () => {
      this.frame = parseInt(document.getElementById("framerate").value);
      this.frame = 1 / this.frame;
    });
    

  
    while (true) {
      if (this.button) {
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
         
          csvFileData.push([`Leaphy_${LEAPHYNUMBER} is touching blue`, "Yellow"]);
          yield* this.wait(2);
          for (let i = 0; i < 20; i++) {this.move(2); yield;}
        }
        if (this.colorTouching(purple, black)) { // Purple touching black
          this.direction -= this.turnDegree;
        }
        if (this.colorTouching(Color.rgb(0, 255, 232), black)) {
          this.direction += this.turnDegree;
        }
        if (this.colorTouching(pink, lightGreen)) {  // Pink touching light green
          this.move(-this.speed);
        }
        this.move(this.speed);
      }
      yield;
      yield* this.wait(this.frame);
    }
  }
}