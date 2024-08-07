# Leaphy V2 Build Page

Welcome to the Leaphy V2 build page! This guide will walk you through the step-by-step process of assembling your Leaphy V2 robot. Follow the instructions carefully and refer to the images provided to ensure a smooth build experience. Let's get started!

![Step 14](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04783.jpg)


## Material list:
    1 * middle frame
    2 * middle side frames
    1 * Finn 
    1 * Bot & Top Plate
  
    1 * USB-C cable
    1 * battery adapter
    6 * batteries
    1 * Battery holder
    
    1 * ESP32
    3 * IR sensors
    1 * Ultrasonic sensor
    2 * DC motors
  
    2 * motor screws
    17 * Small screws
    8 * Big screws
    9 * Female to female (long length)
    4 *  female to female (medium length)

## 1
Place the two screws, the side frame, and the motor next to each other.
![Step 1](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04799.jpg)

## 2
Position the wooden side frame on the motor, ensuring the yellow circle and the motor align with the holes. Tighten the screws.
![Step 2](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04797.jpg)

## 3
Turn the frame over. First, place wheel A, then wheel B with the rubber around it, and finally wheel 3. Tighten the screw on the axle. This screw is slightly longer than the other screws.

Repeat steps two and three for the other side as well.
![Step 3](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04795.jpg)

## 4
Place the middle frame exactly as shown in the image.
![Step 4](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04794.jpg)

## 5
Push the frames together and position the frame exactly as shown in the image.
![Step 5](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04793.jpg)

## 6
Do not move the middle frame as in step 5. Place the bottom plate on top with the Leaphy logo facing up, as shown. Tighten the four screws, but DO NOT OVERTIGHTEN. Be careful, as overtightening can damage the wood and cause the screws to become loose.
![Step 6](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04792.jpg)

## 7
Turn the frame over and place the three IR sensors. Optionally, you can connect all three 3-pin female-to-female cables now so you don't have to do it later.
![Step 7](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04791.jpg)

## 8
Place the batteries in the holder and connect the red wire to the + terminal of the adapter and the black wire to the - terminal. Secure the battery holder in the middle with Velcro. Refer to step 7 to see where the Velcro spot is placed.
![Step 8](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04790.jpg)

## 9
Place the shields on the top plate:
- I2C shield
- Delphi shield
- Motor shield

These can be slotted together; they should not fit together any other way. Ensure that the I2C shield is placed at the front on the flat side and the motor shield at the pointed end.

Place the RGB LED in your preferred location; the front left is a convenient spot.
![Step 9](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04789.jpg)

## 10
Screw the top plate on with the four screws. DO NOT OVERTIGHTEN. Be careful, as overtightening can damage the wood and cause the screws to become loose.

Place the rear fin, ensuring the Leaphy stands horizontally.
![Step 10](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04788.jpg)

## 11
Connect the motor wires. Connect Motor R to side B and Motor L to side A. The wires must be connected to the - and + terminals. If you connect them incorrectly, the wheel will turn in the wrong direction; in that case, swap the wires on the + and - terminals.
![Step 11](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04787.jpg)

## 12
Ensure the switches are set to OFF. Then, insert the power cable into the shield.
![Step 12](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04785.jpg)

## 13
Connect all the jumpers using female-to-female headers.

- **GND:** Ground (-)
- **VCC:** Supply (+) voltage can vary from 3.3V to 5V
- **OUT:** Signal (Data)
- **D:** Digital in/output
- **A:** Analog in/output

- **Line L & R:** For detecting the line in the middle
- **Encoder L & R:** Used for counting stripes; only L is used for now

The sensor and motor module are already connected through the printed circuit board (PCB). Green indicates availability, and ~ means a PWM signal is available on the pin.

![Step 13](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04784.jpg)

![Pinout](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/PinOutESP32.png)

## 14
Place the ESP as indicated on the PCB. Install the ultrasonic sensor on the header at the front.
![Step 14](https://github.com/Basie147/Scratch_Leaphy/blob/main/Build/Photo/DSC04783.jpg)
