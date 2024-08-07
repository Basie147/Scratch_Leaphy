# Digital Twin Software Manual

## Introduction
Welcome to the software manual for integrating the Digital Twin with the Leaphy platform. This guide provides detailed instructions on the software tools and processes required to program and manage your Leaphy robot effectively. By utilizing these tools, you can enhance your robot's functionality and learning experience.

## Software

### Leaphy Easy Bloqs (Easy Level Programming)
Leaphy Easybloqs is a block-based programming environment designed specifically for the Leaphy educational robot. It allows users, particularly beginners and young learners, to program the Leaphy robot using a visual interface with drag-and-drop code blocks, eliminating the need to write complex syntax. The blocks represent various programming constructs and robot commands, making it easy to control the robot’s movements, sensors, and other functionalities. Easybloqs simplifies the learning process, making it accessible for students to explore coding concepts. [Leaphy Easy Bloqs](https://leaphyeasybloqs.com/)

![Simulation Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/Leaphyeasybloqs.png)

### Arduino Cloud Sketches (Medium Level Programming)
For uploading code to the ESP32, the preferable option is to use the Arduino Cloud. It allows users to write, compile, and upload code to Arduino-compatible devices directly from the cloud. It supports real-time monitoring and control of connected devices through a web interface. Users can create and manage projects, define variables, and visualize data using customizable dashboards. The cloud environment provides access to libraries and allows easy integration with third-party services. It also offers remote updates and device management, making it convenient for deploying and maintaining projects without needing direct physical access to the hardware. [Arduino Cloud](https://app.arduino.cc/sketches) Alternatively, you can use the [Arduino IDE](https://www.arduino.cc/en/software).

To use the Digital Twin website use the following files for [Master & Slave Code](https://github.com/Basie147/Scratch_Leaphy/tree/main/Arduino)

![Arduino Cloud Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/ArduinoCloud.png)

## Scratch Line Follower Robot Simulation

### What is Scratch?
Scratch is a free, block-based visual programming language developed by the MIT Media Lab. It is designed to introduce programming concepts to children and beginners through an easy-to-use interface. In Scratch, users can create programs by dragging and dropping code blocks, making it an excellent tool for learning the basics of coding and logical thinking.

### Building Your Own Line Follower Robot Simulation

With Scratch, you can simulate a line follower robot by creating a virtual environment where your robot can detect and follow a line. Here’s a step-by-step guide on how to build your own simulation:

#### Step 1: Set Up the Scratch Environment
1. Go to the Scratch website: [Scratch](https://scratch.mit.edu/projects/1010895729/editor)
2. Create an account or sign in if you already have one.

#### Step 2: Design the Line and Background
1. Use the "Paint Editor" to draw a path or line on the stage that the robot will follow.
2. Ensure the line is continuous and has clear edges to make detection easier.

![Scratch Background](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/ScratchBack.png)

#### Step 3: Create the Robot Sprite
1. Create a new sprite for your robot. You can draw it using the Scratch sprite editor or upload an image.
2. Position the robot at the starting point of the line.

![Scratch Code](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/ScratchCode.png)

#### Step 4: Program the Robot's Movements
1. Use the "Events" blocks to start the program (e.g., when the green flag is clicked).
2. Use "Control" and "Motion" blocks to move the robot forward.
3. Use "Sensing" blocks to detect the line. For example, you can use the "touching color" block to check if the robot is touching the line.
4. Create a loop to keep the robot moving along the line. Adjust the robot's direction based on whether it is touching the line or not.

![Code Flow](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/CodeFlow.png)

### Leaphy Digital Twin
The Leaphy Digital Twin platform, built on Scratch, has extended features such as device connections for data reception and saving logs to a CSV file. This enables real-time monitoring of the Leaphy robot in a virtual environment. This tool allows for the visualization of the robot's operations. [Leaphy Digital Twin](https://digitaltwin.leaphyeasybloqs.com/)

![Digital Twin Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/DT.png)

### ESP32 PainlessMesh Communication

PainlessMesh is a library for creating a mesh network with ESP32 microcontrollers. A mesh network allows multiple devices (nodes) to communicate with each other directly and indirectly, extending the range and reliability of the network. Here's a brief overview of how PainlessMesh communication works:



#### Key Features
- **Decentralized Network**: Each node in the mesh network can communicate with any other node, without the need for a central router or access point.
- **Self-Healing**: The network can dynamically reconfigure itself if nodes are added or removed, ensuring continuous connectivity.
- **Scalability**: Easily add more nodes to extend the network's range and capacity.

#### How It Works
1. **Initialization**: Each ESP32 node initializes the PainlessMesh library, setting up the necessary configurations (e.g., mesh network name, password).
2. **Connection**: Nodes automatically discover and connect to each other, forming the mesh network.
3. **Communication**: Messages can be sent to specific nodes or broadcasted to all nodes. The library handles routing the messages through the network to reach the intended recipient.
4. **Data Exchange**: Nodes can exchange data, such as sensor readings or control commands, enabling coordinated actions across the network.



![Communication Node Interface](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/Node.png) ![Master Salve](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/MasterSlave.png)

To monitor the system, simply connect the Master ESP32 with a wired connection to your device. Click on the connect button and the ESP32 will appear.

![Digital Twin Serial Connection](https://github.com/Basie147/Scratch_Leaphy/blob/main/RM_Soft/Photo/DT_Ser.png)
