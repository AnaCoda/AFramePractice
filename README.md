# Pendulum Game

WebXR game created with A-Frame.
This is a demo for an educational escape room game where the user must use physics to calculate an angle to move a pendulum so that it hits a block which will block lasers, allowing you to escape the room.
Hold the grip to make your controller solid, allowing you to move the pendulum by colliding it with your first. The text on the wall shows the angle of your pendulum, and one wall shows the calculator and physics formulas.

Known kinks/bugs:
    - The calculator doesn't work yet
    - You need to hold the grip button twice before it collides with the pendulum. This appears to be a limitation of the super-hands library for the new version of A-frame
    - Other than the first laser, the other lasers won't collide and disappear. This only has aesthetic purpose since you won't be able to escape unless the block stops at the first laser