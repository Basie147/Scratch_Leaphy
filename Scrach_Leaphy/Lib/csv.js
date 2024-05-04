
// Initialize the existing array
var csvFileData = [];  

// Attach event listener to the button
document.getElementById('download-btn').addEventListener('click', download_csv_file);

// Function to download CSV file
function download_csv_file() {
    // Define the heading for each row of the data
    var csv = 'Leaphy logbook\n';
  
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
  hiddenElement.download = 'Leaphy_Log.csv';
  hiddenElement.click();
}

function writeDataToCSV(csvData, data) {
    csvData.push(data); // Push data to the CSV array
}
  
function generateCSV(csvData) {
    let csv = 'Leaphy Activity,Color\n'; // Header row

    csvData.forEach(function(row) {
        csv += row.join(',') + '\n'; // Concatenate data with CSV format
    });

    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'LeaphyActivity.csv'; // Provide a name for the CSV file
    hiddenElement.click();
}
  



export { download_csv_file , csvFileData};