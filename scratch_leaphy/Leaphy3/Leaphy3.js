
import { Sprite, Trigger, Costume, Color } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
import { connectToSerial, registerListener } from '../Lib/serialFunctions.js';
import { csvFileData } from '../Lib/csv.js';

// Define the constant
const LEAPHYNUMBER = '3';
let COMMAND_NUMBER = '995460516';

document.getElementById("node-id_" + LEAPHYNUMBER).addEventListener('click', function() {
  COMMAND_NUMBER = document.getElementById(`Leaphy-id_${LEAPHYNUMBER}`).value;});
  
  import { data } from '../Stage/Stage.js';
  const xpos =  data[58-LEAPHYNUMBER][0]; //- left + right
  const ypos = data[58- LEAPHYNUMBER][1] // + up - down
  const dir = data[58- LEAPHYNUMBER][2] // + up - down
  
  export default class Leaphy extends Sprite {
    constructor(...args) {
      super(...args);
      this.costumes = [new Costume(`Leaphy`, `./costumes/Leaphy_${LEAPHYNUMBER}.png`, { x: 273, y: 258 })];
      this.triggers = [new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)];
      this.speed = 2; // Define speed as a class property
      this.turnDegree = 10; // Define turnDegree as a class property
      this.button = false; // initialize as a class property
      this.frame = 1/30; // Define frame as a class property
    }
  
    // Interpret serial commands
    interpretSerialCommands = (text) => {
      if (text.includes(COMMAND_NUMBER )) {
      const values = text.split(',');
        if (values.length >= 2) {
          const en_Left = parseFloat(values[0]);
          this.goto(data[en_Left][0],data[en_Left][1]);
          this.direction = data[en_Left][2];
          console.log(en_Left);
        }
      }
    };
  
    *whenGreenFlagClicked() {
      // Setup event listeners
      registerListener(this);
      document.getElementById("connect").addEventListener("click", connectToSerial);
      document.getElementById("myButton").addEventListener("click", () => { this.button = !this.button; });
    
      this.goto(xpos, ypos);
      this.direction = dir;
    
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
      document.getElementById("templateButton").addEventListener("click", () => {
        const template = document.getElementById("template").value;
        if (template === "2") {
          this.costumes = [new Costume("Leaphy", "./costumes/forklift.png" )];
          this.goto(200-(40*LEAPHYNUMBER), -140);
          this.direction = 90;
        }
        else if (template === "5") {
          this.costumes = [new Costume("Leaphy", "./costumes/Bus.png", { x: 273, y: 258 })];
        }
        else  this.costumes = [new Costume("Leaphy", "./costumes/Leaphy.png", { x: 273, y: 258 })]
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
          const lightGreen = Color.rgb(122, 182, 73);
  
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