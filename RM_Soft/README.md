# Digital Twin Software Manuel

## Introduction
Welcome to the software manual for integrating the Digital Twin with the Leaphy platform. This guide provides detailed instructions on the software tools and processes required to program and manage your Leaphy robot effectively. By utilizing these tools, you can enhance your robot's functionality and learning experience.

## Software

### Leaphy Easy Bloqs
Leaphy Easybloqs is a block-based programming environment designed specifically for the Leaphy educational robot. It allows users, particularly beginners and young learners, to program the Leaphy robot using a visual interface with drag-and-drop code blocks, eliminating the need to write complex syntax. The blocks represent various programming constructs and robot commands, making it easy to control the robot’s movements, sensors, and other functionalities. Easybloqs simplifies the learning process, making it accessible for students to explore coding concepts.

![Simulation Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/Leaphyeasybloqs.png)

[Leaphy Easy Bloqs](https://leaphyeasybloqs.com/)

### Arduino Cloud Sketches
For uploading code to the ESP32, the preferable option is to use the Arduino Cloud. It allows users to write, compile, and upload code to Arduino-compatible devices directly from the cloud. It supports real-time monitoring and control of connected devices through a web interface. Users can create and manage projects, define variables, and visualize data using customizable dashboards. The cloud environment provides access to libraries and allows easy integration with third-party services. It also offers remote updates and device management, making it convenient for deploying and maintaining projects without needing direct physical access to the hardware.

![Arduino Cloud Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/ArduinoCloud.png)

[Arduino Cloud](https://app.arduino.cc/sketches)

Alternatively, you can use the [Arduino IDE](https://www.arduino.cc/en/software).


https://scratch.mit.edu/projects/1010895729/editor
![Arduino Cloud Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/Scratch.png)


### Leaphy Digital Twin
The Leaphy Digital Twin platform enables the simulation and real-time monitoring of the Leaphy robot in a virtual environment. This tool allows for the visualization of the robot's operations and the testing of programming code before deploying it to the physical robot.

![Digital Twin Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/DigitalTwin.png)

[Leaphy Digital Twin](https://digitaltwin.leaphyeasybloqs.com/)

#### Communication
ESP32 microcontrollers and WebSocket technology enable real-time control and monitoring. Data is stored locally using SQLite and can be exported in CSV format.

![Communication Node Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/Node.png)
