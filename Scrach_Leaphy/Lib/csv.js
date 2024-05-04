// // Attach event listener to the button
// document.getElementById('download-btn').addEventListener('click', download_csv_file);

// // Initialize the existing array
// var csvFileData = [];  

// csvFileData.push(["Leaphy is touching red", "Yellow"]);
// console.log(csvFileData);

// // Function to download CSV file
// function download_csv_file() {
//   // Define the heading for each row of the data
//   var csv = 'Name,Profession\n';

//   // Merge the data with CSV
//   csvFileData.forEach(function(row) {
//       csv += row.join(',');
//       csv += "\n";
//   });

//   // Display the created CSV data in the preformatted block
//   document.getElementById('csv-display').textContent = csv;

//   // Create an anchor element to initiate download
//   var hiddenElement = document.createElement('a');
//   hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
//   hiddenElement.target = '_blank';
//   hiddenElement.download = 'Famous Personalities.csv';
//   hiddenElement.click();
// }

// // Function to write data to CSV array
// function writeDataToCSV(data) {
//   csvFileData.push(data); // Push data to the CSV array
// }

// // Function to generate and download CSV file
// function generateCSV() {
//   let csv = 'Leaphy Activity,Color\n'; // Header row

//   csvFileData.forEach(function(row) {
//     csv += row.join(',') + '\n'; // Concatenate data with CSV format
//   });

//   const hiddenElement = document.createElement('a');
//   hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
//   hiddenElement.target = '_blank';
//   hiddenElement.download = 'LeaphyActivity.csv'; // Provide a name for the CSV file
//   hiddenElement.click();
// }
