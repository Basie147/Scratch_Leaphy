/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

// Initialize the existing array
var csvFileData = [];  

// Function to download CSV file
function download_csv_file() {
  // Define the heading for each row of the data
  var csv = 'Name,Profession\n';

  // Merge the data with CSV
  csvFileData.forEach(function(row) {
      csv += row.join(',');
      csv += "\n";
  });

  // Display the created CSV data in the preformatted block
  document.getElementById('csv-display').textContent = csv;

  // Create an anchor element to initiate download
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'Famous Personalities.csv';
  hiddenElement.click();
}

// Attach event listener to the button
document.getElementById('download-btn').addEventListener('click', download_csv_file);
export default class Leaphy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Leaphy", "./Leaphy/costumes/Leaphy.png", { x: 273, y: 258 }),
    ];

    this.csvData = []; // Initialize an array to store CSV data

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  writeDataToCSV(data) {
    this.csvData.push(data); // Push data to the CSV array
  }

  generateCSV() {
    let csv = 'Leaphy Activity,Color\n'; // Header row

    this.csvData.forEach(function(row) {
      csv += row.join(',') + '\n'; // Concatenate data with CSV format
    });

    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'LeaphyActivity.csv'; // Provide a name for the CSV file
    hiddenElement.click();
  }
  

  *whenGreenFlagClicked() {
    this.goto(140, -150);
    this.direction = 90;
    while (true) {
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
      yield;
    }
  }
}






