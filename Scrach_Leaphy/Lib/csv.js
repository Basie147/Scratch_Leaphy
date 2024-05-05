// Function to update CSV display
function updateCSVDisplay(csvData) {
    var csv = 'Leaphy logbook\n';
    csvData.forEach(function(row) {
        csv += row.join(',');
        csv += "\n";
    });
    document.getElementById('csv-display').textContent = csv;
}

// Initializing the proxy around csvFileData array
const csvFileDataHandler = {
    set(target, property, value) {
        target[property] = value;
        // Update the display whenever csvFileData changes
        updateCSVDisplay(target);
        return true; // indicates that the property was successfully set
    }
};

const csvFileData = new Proxy([], csvFileDataHandler);

// Attach event listener to the button
document.getElementById('download-btn').addEventListener('click', () => {
    download_csv_file(csvFileData);
});

// Function to download CSV file
function download_csv_file(csvData) {
    var csv = 'Leaphy logbook\n';
    csvData.forEach(function(row) {
        csv += row.join(',');
        csv += "\n";
    });
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Leaphy_Log.csv';
    hiddenElement.click();
}



// Example usage
function addDataToCSV(newData) {
    csvFileData.push(newData); // This will automatically update the CSV display
}

export { download_csv_file, csvFileData, addDataToCSV };
