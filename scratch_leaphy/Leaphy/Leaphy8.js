import { Sprite, Trigger, Costume, Color } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
import { connectToSerial, registerListener } from '../Lib/serialFunctions.js';
import { csvFileData } from '../Lib/csv.js';

// Define the constant
const LEAPHYNUMBER = '8';
const COMMAND_NUMBER = '999999999';
const xpos = 220 - LEAPHYNUMBER * 40;
const ypos = -150;

// Define colors
const yellow = Color.rgb(255, 247, 0);
const red = Color.rgb(255, 0, 0);
const green = Color.rgb(0, 255, 21);
const blue = Color.rgb(0, 94, 255);
const purple = Color.rgb(153, 102, 255);
const black = Color.rgb(0, 0, 0);
const pink = Color.rgb(249, 0, 255);
const lightGreen = Color.rgb(122, 182, 73);
const lightblue = Color.rgb(0, 255, 232);

// Event listener for the node-id_1 button
document.getElementById("node-id_" + LEAPHYNUMBER).addEventListener('click', function() { // Event listener for the node-id_1 button
  COMMAND_NUMBER = document.getElementById("Leaphy-id_1").value;}); // Set the command number to the value of the input field

// Event listener for the node
export default class Leaphy extends Sprite {
  constructor(...args) {
    super(...args); // Call the constructor of the superclass.
    this.costumes = [new Costume("Leaphy", "./costumes/Leaphy.png", { x: 273, y: 258 }) ]; //Import Sprite
    this.triggers = [new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)]; // Trigger simulation
    this.speed = 2.0; // Speed off class 
    this.turnDegree = 10; // Turn of Degree 
    this.button = false; //  Simulation button
    this.frame = 1/30; //  framerate
  }

  // Interpret serial commands
  interpretSerialCommands = (text) => {
    if (text.includes(COMMAND_NUMBER )) {
      if (text.includes('Forward')) this.move(this.speed);
      if (text.includes('stop')) this.move(0);
      if (text.includes('Right')) this.direction -= this.turnDegree;
      if (text.includes('Left')) this.direction += this.turnDegree;
    }
  };

  // When the green flag is clicked
  *whenGreenFlagClicked() {
    // Setup event listeners

    registerListener(this);
    // Event listener for the connect button
    document.getElementById("connect").addEventListener("click", connectToSerial);
    // Event listener for the button
    document.getElementById("myButton").addEventListener("click", () => { this.button = !this.button; });
    // Event listener for the speed button
    document.getElementById("speedButton").addEventListener("click", () => {
      this.speed = parseFloat(document.getElementById("speedInput").value);
      document.getElementById("speedValue").textContent = this.speed.toFixed(1).replace('.', ',');
    });
    // Event listener for the turn button
    document.getElementById("turnButton").addEventListener("click", () => {
      this.turnDegree = parseInt(document.getElementById("turnInput").value);
      document.getElementById("turnValue").textContent = this.turnDegree;
    });
    // Event listener for the framerate button
    document.getElementById("framerateButton").addEventListener("click", () => {
      this.frame = parseInt(document.getElementById("framerate").value);
      this.frame = 1 / this.frame;
    });
    // Event listener for the template button
    document.getElementById("templateButton").addEventListener("click", () => {
      const template = document.getElementById("template").value;
      if (template === "2") {
      this.costumes = [new Costume("Leaphy", "./costumes/forklift.png", { x: 273, y: 258 })];
      }
      else if (template === "5") {
        this.costumes = [new Costume("Leaphy", "./costumes/Bus.png", { x: 273, y: 258 })];
      }
      else  this.costumes = [new Costume("Leaphy", "./costumes/Leaphy.png", { x: 273, y: 258 })]
    });

    this.goto(xpos, ypos);
    this.direction = 90;

    // The scratch color simulation
    while (true) {
      if (this.button) {

        // Check if yellow color sensor is touching RGB
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

        // Line following logic
        if (this.colorTouching(purple, black)) { // Purple touching black
          this.direction -= this.turnDegree; // Turn left
        }
        if (this.colorTouching(lightblue, black)) { // Blue touching black
          this.direction += this.turnDegree; // Turn right
        }
        if (this.colorTouching(pink, lightGreen)) {  // Pink touching light green
          this.move(-this.speed); // Stop
        }
        this.move(this.speed); // Move forward
      }
      yield;
      yield* this.wait(this.frame);
    }
  }
}