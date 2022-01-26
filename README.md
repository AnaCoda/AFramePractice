# Pendulum Game

WebXR game created with A-Frame.

This is a demo for an educational escape room game where the user must use physics to calculate an angle to move a pendulum so that it hits a block which will block lasers, allowing you to escape the room.

I made this for my Computer Science 30 final project :), thanks to my school for supporting me!

Hold the grip to make your controller solid, allowing you to move the pendulum by colliding it with your first. The text on the wall shows the angle of your pendulum, and one wall shows the calculator and physics formulas.

Also uses:
* Ammo.js physics system (https://github.com/n5ro/aframe-physics-system)
* A-frame blink controls for teleportation (https://github.com/jure/aframe-blink-controls)
* A-frame HTMLEmbed component for calculator (https://github.com/supereggbert/aframe-htmlembed-component)

![Educational_Pendulum_Game__CS30_Final_Project](https://user-images.githubusercontent.com/20260142/151087201-e81f4010-20d7-46d6-bbc4-932738d672cf.gif)
![image](https://user-images.githubusercontent.com/20260142/151086578-a5c24094-175a-4ec9-b7ef-33330cf76bdd.png)
![image](https://user-images.githubusercontent.com/20260142/151086661-af97b086-010b-4b77-bfde-2a23f2f5e61a.png)
![image](https://user-images.githubusercontent.com/20260142/151086719-8fd702f6-c08d-4239-93f0-2e60f47cc531.png)

Known kinks/bugs:
* The calculator doesn't work yet
* You need to hold the grip button twice before it collides with the pendulum. This appears to be a limitation of the super-hands library for the new version of A-frame
* Other than the first laser, the other lasers won't collide and disappear. This only has aesthetic purpose since you won't be able to escape unless the block stops at the first laser

TODO:
* Fix the above
* Randomize the variables
