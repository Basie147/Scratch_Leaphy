#include "painlessMesh.h"  // Mesh networking library

// Mesh network configuration
#define MESH_PREFIX     "whateverYouLike"   
#define MESH_PASSWORD   "somethingSneaky"   
#define MESH_PORT       5555                

Scheduler userScheduler;  // Task scheduler
painlessMesh mesh;  // Mesh network object
String incomingMessage = "";  // Stores incoming serial data

// Sends a message to all nodes in the mesh
void sendMessage() {
    String msg = incomingMessage + mesh.getNodeId();  
    mesh.sendBroadcast(msg);  
}

// Task to send messages periodically
Task taskSendMessage(TASK_SECOND, 1, sendMessage);  // Create a task to send messages every second

// Handles received messages
void receivedCallback(uint32_t from, String &msg) {
    Serial.printf("%s\n", msg.c_str());  
}

// Handles new connections
void newConnectionCallback(uint32_t nodeId) {
    Serial.printf("New Connection, nodeId = %u\n", nodeId);  
}

// Set up the mesh network and callbacks
void setupMeshNetwork() {
    mesh.setDebugMsgTypes(ERROR | STARTUP);  
    mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);  
    mesh.onReceive(receivedCallback);
    mesh.onNewConnection(newConnectionCallback);
}

// Check and process serial input
void checkAndProcessSerialInput() {
    if (Serial.available() > 0) {  
        incomingMessage = Serial.readStringUntil('\n');  
        Serial.println("I received: " + incomingMessage);
        handleIncomingMessage();  
    }
}

// Handle specific incoming messages
void handleIncomingMessage() {
    if (incomingMessage == "stop_leaphy") {
        digitalWrite(14, LOW);  
        sendMessage();
    } else if (incomingMessage == "start_leaphy") {
        digitalWrite(14, HIGH);  
        sendMessage();
    }
}

void setup() {
    Serial.begin(115200);  
    pinMode(16, OUTPUT);  
    setupMeshNetwork();  
    userScheduler.addTask(taskSendMessage);
    taskSendMessage.enable();  
}

void loop() {
    checkAndProcessSerialInput();  
    mesh.update();  
}