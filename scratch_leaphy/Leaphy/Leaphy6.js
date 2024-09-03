const LEAPHYNUMBER = '6'; // Define the Leaphy number
const COMMAND_NUMBER = '996207884'; // Define the Node ID from the ESP32

import { Sprite, Trigger, Costume, Color } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
import { connectToSerial, registerListener } from '../Lib/serialFunctions.js';
import { csvFileData } from '../Lib/csv.js';
import { data } from '../Stage/Stage.js';

// Define the colors codes for simulation
const yellow = Color.rgb(255, 247, 0);
const red = Color.rgb(255, 0, 0);
const green = Color.rgb(0, 255, 21);
const blue = Color.rgb(0, 94, 255);
const purple = Color.rgb(153, 102, 255);
const black = Color.rgb(0, 0, 0);
const pink = Color.rgb(249, 0, 255);
const lightGreen = Color.rgb(122, 182, 73);
const lightBlue = Color.rgb(0, 255, 232); 

// Start postion from the location array (stage.js)
const LOCATIONS = 42 // The amount of spawn locations
const xpos =  data[LOCATIONS-LEAPHYNUMBER][0]; // X start position
const ypos = data[LOCATIONS- LEAPHYNUMBER][1] // y start position
const dir = data[LOCATIONS- LEAPHYNUMBER][2] // point of direction start position
let start = false // Start the simulation

export default class Leaphy extends Sprite {
  constructor(...args) {
    super(...args);
    this.costumes = [new Costume(`Leaphy`, `./costumes/Leaphy_${LEAPHYNUMBER}.png`, { x: 273, y: 258 })]; // Costume of sprite (leaphy)
    this.triggers = [new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)]; // Simulation trigger
    this.speed = 2; // Speed of sprite (leaphy)
    this.turnDegree = 10; // Turn degree of sprite (leaphy)
    this.button = false; // Button to start the simulation
    this.frame = 1/30; // Frame rate of the simulation
  }

/////////////////////////////////// Real time monitoring ////////////////////////////

    interpretSerialCommands = (text) => { // Function to interpret the serial commands
      if (text.includes(COMMAND_NUMBER )) {
      const values = text.split(','); // Split the text by the comma
        if (values.length >= 2) { // If the index is greater that two items
          const en_Left = parseFloat(values[1]); // Get the second value
          if (en_Left == 0) {start = true} // If the value is 0, start the simulation

          if (start == true && en_Left < LOCATIONS) {  // If the value is less than the amount of locations
          this.goto(data[en_Left][0],data[en_Left][1]); // Go to the location
          this.direction = data[en_Left][2]; // Set the direction
          console.log(data[en_Left][0],data[en_Left][1],data[en_Left][2]); // Log the location
      }
    }
  }
};
/////////////////////////////////// End Real time monitoring //////////////////////

/////////////////////////////////// Simulation  ///////////////////////////////////
  *whenGreenFlagClicked() {
    
    // Setup event listeners
    registerListener(this);
    // Connect to the serial port button
    document.getElementById("connect").addEventListener("click", connectToSerial);
    document.getElementById("myButton").addEventListener("click", () => { this.button = !this.button; });
    // Set the speed of the sprite button
    document.getElementById("speedButton").addEventListener("click", () => {
      this.speed = parseFloat(document.getElementById("speedInput").value);
      document.getElementById("speedValue").textContent = this.speed.toFixed(1).replace('.', ',');
    });
    // Set the node ID button
    document.getElementById("node-id_" + LEAPHYNUMBER).addEventListener('click', function() {
      COMMAND_NUMBER = document.getElementById(`Leaphy-id_${LEAPHYNUMBER}`).value;});
    // Set the turn degree button
    document.getElementById("turnButton").addEventListener("click", () => {
      this.turnDegree = parseInt(document.getElementById("turnInput").value);
      document.getElementById("turnValue").textContent = this.turnDegree;
    });
    // Set the frame rate button
    document.getElementById("framerateButton").addEventListener("click", () => {
      this.frame = parseInt(document.getElementById("framerate").value);
      this.frame = 1 / this.frame;
    });
    // Set the template button
    document.getElementById("templateButton").addEventListener("click", () => {
      const template = document.getElementById("template").value; // Get the value of the template
      if (template === "2") {
        this.costumes = [new Costume("Leaphy", "./costumes/forklift.png" )]; // Forklift
        this.goto(200-(40*LEAPHYNUMBER), -140);
        this.direction = 90;
      }
      else if (template === "5") {
        this.costumes = [new Costume("Leaphy", "./costumes/Bus.png", { x: 273, y: 258 })]; // Bus
      }
      else  this.costumes = [new Costume("Leaphy", "./costumes/Leaphy.png", { x: 273, y: 258 })] // Leaphy
    });

    // initial position and direction
    this.goto(xpos, ypos);
    this.direction = dir;

    /////////////// simulation loop //////////////////
    while (true) {
      if (this.button) {

        // Logic Yellow color sensor
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

        // Logic of sprite (Leaphy) movement 
        if (this.colorTouching(purple, black)) { // Purple touching black (IR sensor L)
          this.direction -= this.turnDegree; // Steer Right
        }
        if (this.colorTouching(lightBlue, black)) { // Light blue touching black (IR sensor R)
          this.direction += this.turnDegree; // Steer Left
        }
        if (this.colorTouching(pink, lightGreen)) {  // Pink touching light green (Distance sensor)
          this.move(-this.speed); // Stop
        }
        this.move(this.speed); // Move the sprite (Leaphy)
      }
      yield;
      yield* this.wait(this.frame); // frame update
    }
  }
}

/////////////////////////////////// End Simulation  ///////////////////////////////////
