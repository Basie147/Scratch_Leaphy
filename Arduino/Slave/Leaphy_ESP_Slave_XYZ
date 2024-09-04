#include "painlessMesh.h"
#include <QMC5883LCompass.h>

// Instantiate the compass object
QMC5883LCompass compass;

// Mesh network configuration
#define MESH_PREFIX "whateverYouLike"
#define MESH_PASSWORD "somethingSneaky"
#define MESH_PORT 5555

// Pin definitions for sensors, motors, LEDs, and encoders
#define TRIG_PIN 20
#define ECHO_PIN 19
#define LEFT_SENSOR_PIN 17
#define RIGHT_SENSOR_PIN 18
#define PWM_B_PIN 11
#define DIR_B_PIN 4
#define PWM_A_PIN 3
#define DIR_A_PIN 2
#define RED_PIN 5
#define GREEN_PIN 6
#define BLUE_PIN 7
#define RED_PIN_TOP 14
#define STOP_CONTROL_PIN 16
#define ENCODER_LEFT_PIN 23
#define RED_LED 24

// Motor control parameters
#define MOTOR_SPEED 220
#define TURN_SPEED_ADJUSTMENT 30

// Sensor and control parameters
#define DISTANCE_THRESHOLD_CM 20
#define ENCODER_MAX_COUNT 45
#define ENCODER_RESET_COUNT 3
#define ENCODER_RESET_INTERVAL_MS 300
#define DELAY_AFTER_MOVE_MS 200
#define SENSOR_READ_DELAY_MS 10
#define TRIG_PULSE_DURATION_US 10
#define TRIG_PULSE_DELAY_US 2
#define PULSE_TIMEOUT_US 30000

// LED and direction state constants
#define LED_ON HIGH
#define LED_OFF LOW
#define FORWARD LOW
#define BACKWARD HIGH

// Variables for sensor values and control states
long duration;
int distance;
int Stop = 0;
int leftSensorValue = 0;
int rightSensorValue = 0;

// Encoder counts
int leftEncoderCount = 1;
int lastLeftEncoderState = LOW;

// Timing for encoder reset
unsigned long lastStripeTime = 0;

// Mesh network and scheduler
Scheduler userScheduler;
painlessMesh mesh;

void sendMessage() {
    String msg = String(mesh.getNodeId()) + "," + String(leftEncoderCount);
    mesh.sendBroadcast(msg);
}

// Mesh network callbacks
void receivedCallback(uint32_t from, String& msg) {
    if (msg.indexOf("stop_leaphy") != -1) {
        digitalWrite(RED_PIN_TOP, LED_OFF);
        Stop = 1;
    } else if (msg.indexOf("start_leaphy") != -1) {
        digitalWrite(RED_PIN_TOP, LED_ON);
        Stop = 0;
    }
}

void newConnectionCallback(uint32_t nodeId) {
    Serial.printf("New Connection, nodeId = %u\n", nodeId);
}

void changedConnectionCallback() {
    Serial.printf("Connections changed\n");
}

void nodeTimeAdjustedCallback(int32_t offset) {
    Serial.printf("Time adjusted by %d\n", offset);
}

// Motor control functions
void stopMotors() {
    analogWrite(PWM_A_PIN, 0);
    analogWrite(PWM_B_PIN, 0);
    digitalWrite(RED_PIN, LED_ON);
    digitalWrite(GREEN_PIN, LED_OFF);
    digitalWrite(BLUE_PIN, LED_OFF);
}

void moveForward() {
    digitalWrite(DIR_A_PIN, FORWARD);
    digitalWrite(DIR_B_PIN, BACKWARD);
    analogWrite(PWM_A_PIN, MOTOR_SPEED);
    analogWrite(PWM_B_PIN, MOTOR_SPEED);
    digitalWrite(RED_PIN, LED_OFF);
    digitalWrite(GREEN_PIN, LED_ON);
    digitalWrite(BLUE_PIN, LED_OFF);
}

void turnLeft() {
    digitalWrite(DIR_A_PIN, FORWARD);
    digitalWrite(DIR_B_PIN, FORWARD);
    analogWrite(PWM_A_PIN, MOTOR_SPEED - TURN_SPEED_ADJUSTMENT);
    analogWrite(PWM_B_PIN, MOTOR_SPEED - TURN_SPEED_ADJUSTMENT);
    digitalWrite(RED_PIN, LED_OFF);
    digitalWrite(GREEN_PIN, LED_OFF);
    digitalWrite(BLUE_PIN, LED_ON);
}

void turnRight() {
    digitalWrite(DIR_A_PIN, BACKWARD);
    digitalWrite(DIR_B_PIN, BACKWARD);
    analogWrite(PWM_A_PIN, MOTOR_SPEED - TURN_SPEED_ADJUSTMENT);
    analogWrite(PWM_B_PIN, MOTOR_SPEED - TURN_SPEED_ADJUSTMENT);
    digitalWrite(RED_PIN, LED_OFF);
    digitalWrite(GREEN_PIN, LED_OFF);
    digitalWrite(BLUE_PIN, LED_ON);
}

// Update encoder counts
void updateEncoders() {
    int currentLeftEncoderState = digitalRead(ENCODER_LEFT_PIN);
    unsigned long currentTime = millis();

    if (currentLeftEncoderState != lastLeftEncoderState) {
        lastLeftEncoderState = currentLeftEncoderState;

        if (currentLeftEncoderState == LOW) {
            leftEncoderCount++;

            digitalWrite(RED_LED, !digitalRead(RED_LED));

            if (leftEncoderCount == ENCODER_MAX_COUNT) {
                leftEncoderCount = 0;
            }

            if (leftEncoderCount >= ENCODER_RESET_COUNT && (currentTime - lastStripeTime) <= ENCODER_RESET_INTERVAL_MS) {
                moveForward();
                delay(DELAY_AFTER_MOVE_MS);
                leftEncoderCount = 0;
            }

            sendMessage();
            lastStripeTime = currentTime;
        }
    }
}

// Check ultrasonic sensor and update distance
void checkUltrasonicSensor() {
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(TRIG_PULSE_DELAY_US);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(TRIG_PULSE_DURATION_US);
    digitalWrite(TRIG_PIN, LOW);
    duration = pulseIn(ECHO_PIN, HIGH, PULSE_TIMEOUT_US);
    distance = duration * 0.034 / 2;
}

// Check line sensors
void checkLineSensors() {
    leftSensorValue = digitalRead(LEFT_SENSOR_PIN);
    rightSensorValue = digitalRead(RIGHT_SENSOR_PIN);
}

// Determine motor control based on sensors
void processMotorControl() {
    if ((distance < DISTANCE_THRESHOLD_CM && distance != 0) || Stop == 1) {
        stopMotors();
        delay(5000);  // Delay when stopped
    } else {
        if (leftSensorValue == LOW && rightSensorValue == HIGH) {
            turnRight();
        } else if (leftSensorValue == HIGH && rightSensorValue == LOW) {
            turnLeft();
        } else {
            moveForward();
        }
    }
}

// Update the mesh network state
void updateMeshNetwork() {
    mesh.update();
}

int counter = 0;  // Initialize a counter

void getXYZ() {
  // Increment the counter
  counter++; // every 10ms updating

  // Check if the counter has reached 50 (2 * in a second)
  if (counter >= 50) {

    int x, y, z;

    // Read compass values
    compass.read();
    
    // Return XYZ readings
    x = compass.getX();
    y = compass.getY();
    z = compass.getZ();

    Serial.println("X: " + String(x) + " Y: " + String(y) + " Z: " + String(z)); // Print the values to the serial monitor
    
    // Create a message with Node ID, X, Y, and Z values
    String msg = String(mesh.getNodeId()) + ",X:" + String(x) + ",Y:" + String(y) + ",Z:" + String(z);
    
    // Send the message as a broadcast
    mesh.sendBroadcast(msg);
    
    // Reset the counter
    counter = 0;
  }
}


// Setup function
void setup() {
    Serial.begin(115200);
  
    compass.init();

    // Initialize mesh network
    mesh.setDebugMsgTypes(ERROR | STARTUP);
    mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
    mesh.onReceive(&receivedCallback);
    mesh.onNewConnection(&newConnectionCallback);
    mesh.onChangedConnections(&changedConnectionCallback);
    mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);

    // Initialize pins
    pinMode(TRIG_PIN, OUTPUT);
    pinMode(ECHO_PIN, INPUT);
    pinMode(LEFT_SENSOR_PIN, INPUT);
    pinMode(RIGHT_SENSOR_PIN, INPUT);
    pinMode(PWM_B_PIN, OUTPUT);
    pinMode(DIR_B_PIN, OUTPUT);
    pinMode(PWM_A_PIN, OUTPUT);
    pinMode(DIR_A_PIN, OUTPUT);
    pinMode(RED_PIN, OUTPUT);
    pinMode(GREEN_PIN, OUTPUT);
    pinMode(BLUE_PIN, OUTPUT);
    pinMode(STOP_CONTROL_PIN, OUTPUT);

    // Initialize encoder pins
    pinMode(ENCODER_LEFT_PIN, INPUT);
    pinMode(RED_LED, OUTPUT);
}

// Main loop function
void loop() {
    checkUltrasonicSensor();
    checkLineSensors();
    processMotorControl();
    updateEncoders();
    updateMeshNetwork();
    getXYZ();
   
    delay(SENSOR_READ_DELAY_MS);
}