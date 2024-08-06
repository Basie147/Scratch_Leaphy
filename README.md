
# Manual for Digital Twin Integration with Leaphy Platform

![](https://github.com/Basie147/Scratch_Leaphy/blob/main/Readme/leaphy-robots_orig.jpg)

## Introduction

This manual guides the integration of a Digital Twin (DT) into the Master Next Level Engineering (MNLE) program at the University of Applied Sciences Utrecht (HU) using the Leaphy platform, Arduino Cloud, and a dedicated Digital Twin website. The DT bridges theoretical knowledge with practical applications, equipping students with essential skills in robotics.

## Understanding a Digital Twin (DT)

A Digital Twin is a virtual representation of a physical system that mirrors the real-world entity through continuous data exchange. It allows real-time monitoring, simulation, and analysis, enabling prediction of outcomes and optimization of operations.


![](https://github.com/Basie147/Scratch_Leaphy/blob/main/Readme/DigitalTwinLevel.png)



## Key Components

Leaphy Robot: The physical hardware serving as the primary subject of the DT.
Arduino Cloud: A platform for programming and managing the Leaphy robot, allowing remote control and data collection.
Digital Twin Website: An online interface for interacting with the digital representation of the Leaphy robot.
Objectives

Hands-On Learning: Practical engineering tasks.
Skill Development: Understanding complex concepts through practical application.
Real-World Simulation: Scenario testing and data-driven decision-making.

## Requirements

Leaphy Robot Kit: Includes necessary hardware components.
Computer with Internet Access: For accessing the Arduino Cloud and Digital Twin Website.
Arduino IDE: Software for programming the Leaphy robot.
Digital Twin Website Account: Credentials for interacting with the digital model.
3.3 Detailed Design

## Hardware
A line follower robot detects and follows a path using two infrared sensors for line detection and an ultrasonic sensor for obstacle detection. It includes two DC motors for movement.

    •	The Leaphy Original frame: 1
    •	DC motor: 2
    •	IR Sensor: 3
    •	Ultrasonic sensor: 1
    •	Leaphy Delphy shield: 1
    •	Leaphy Delphy I2C Module: 1
    •	Leaphy Delphy Motor Module: 1
    •	RGB LED: 1

## Software
The DT system includes the Leaphy system (slave), the master module, and the user web interface. The master module manages communication between the Leaphy and the website. The simulation engine, developed using LeopardJS, provides a platform for simulation scenarios.

Communication
The system uses WebSocket for real-time communication, with data formatted in JSON. The ESP32 microcontroller facilitates mesh networking, allowing communication among multiple robots.

Interface
The user interface, developed in JavaScript, is hosted on a dedicated website. It allows users to adjust simulation parameters, monitor real-time status, and log data for performance analysis.

# Learning Experience
The hackathon week covers:

Monday: Introduction to the robot and DT concepts.
Tuesday: Development of an interactive system.
Wednesday: Data management and maintenance detection.
Thursday: Change management and human factors.
Friday: Evaluation and professional skills development.
3.3.6 Design Test
Test plans validate the design aspects, including the Leaphy module, master module, web interface, and learning outcomes.

3.4 Implementation

3.4.1 Hardware
Components include the ESP32 microcontroller, infrared line sensors, ultrasonic sensors, and DC motors. The hardware setup ensures proper functionality and integration.

3.4.2 Software
The simulation engine uses LeopardJS, with scenarios hosted on a web server. The engine simulates robot movements and sensor interactions.

3.4.3 Communication
ESP32 microcontrollers and WebSocket technology enable real-time control and monitoring. Data is stored locally using SQLite and can be exported in CSV format.

3.4.4 Interface
The user interface provides control for simulations, real-time monitoring, and data logging. It features intuitive controls for easy interaction.

3.4.5 Setting Up the System
A flowchart provides a step-by-step guide for setting up the Leaphy robot with the DT, including troubleshooting and error correction procedures.

This manual serves as a complete guide for setting up and using the Digital Twin system with the Leaphy platform, Arduino Cloud, and Digital Twin Website, providing a practical and comprehensive learning experience.
  ![Simulation Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/Readme/ArduinoCloud.png)
  ![Simulation Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/Readme/DigitalTwin.png)
  

//<img src="https://github.com/Basie147/Scratch_Leaphy/blob/main/Readme/DigitalTwinLevel.png" width="100" height="100">






