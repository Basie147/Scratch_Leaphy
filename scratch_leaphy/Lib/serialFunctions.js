import { csvFileData } from '../Lib/csv.js';

let listeners = [];
let port = null;
let reader = null;
let buffer = ""; // Buffer to accumulate incoming data

// Function to toggle serial connection
async function toggleSerialConnection() {
  if (port) {
    if (reader) {
      // Close the serial reader if it exists
      await reader.cancel();
      reader.releaseLock();
      reader = null;
    }

    // Close the serial port
    await port.close();
    port = null;
    console.log("Disconnected from the serial port.");
  } else {
    // Connect to the serial port
    await connectToSerial();
  }
}

// Function to connect to the serial port
async function connectToSerial() {
  if (!('serial' in navigator)) {
    console.error("Web Serial API not supported in this browser.");
    return;
  }

  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    console.log("Connected to a serial port.");
    handleSerialData();
  } catch (error) {
    console.error('Error opening the serial port:', error);
    port = null;
  }
}

// Function to handle incoming serial data
async function handleSerialData() {
  reader = port.readable.getReader();
  const textDecoder = new TextDecoder();

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        console.log("Serial reader has been closed, no more data.");
        break;
      }
      buffer += textDecoder.decode(value, { stream: true });

      let newlineIndex;
      while ((newlineIndex = buffer.indexOf('\n')) >= 0) {
        const completeMessage = buffer.slice(0, newlineIndex + 1);
        buffer = buffer.slice(newlineIndex + 1);
        processMessage(completeMessage.trim()); // Process the complete message
      }
    }
  } catch (error) {
    console.error('Error reading from serial port:', error);
    if (reader) {
      reader.releaseLock();
    }
  }
}

function processMessage(msg) {
  console.log(msg);
  csvFileData.push([msg]);
  broadcastData(msg);
}

// Add event listener to button
document.getElementById("send").addEventListener('click', sendMessage);

async function sendMessage() {
  const textEncoder = new TextEncoder();
  const dataToSend = textEncoder.encode(document.getElementById('messageToSend').value + '\n'); // Add a newline character to the message
  if (port && port.writable) {
    const writer = port.writable.getWriter();
    await writer.write(dataToSend);
    writer.releaseLock();
    console.log("Message sent:", document.getElementById('messageToSend').value);
  } else {
    console.error("Port not connected or not writable.");
  }
}

// Broadcasts data to all registered listeners
function broadcastData(data) {
  listeners.forEach(listener => {
    if (listener.interpretSerialCommands) {
      listener.interpretSerialCommands(data);
    }
  });
}

// Register an object as a listener
function registerListener(listener) {
  if (!listeners.includes(listener)) {
    listeners.push(listener);
    listener.isConnected = true; // Optionally manage connection state per listener
  }
}

// Unregister an object from receiving data
function unregisterListener(listener) {
  const index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
    listener.isConnected = false; // Optionally manage connection state per listener
  }
}

// Add event listener to button
document.getElementById("connect").addEventListener('click', toggleSerialConnection);

export { connectToSerial, registerListener, unregisterListener };


