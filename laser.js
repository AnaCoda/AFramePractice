AFRAME.registerComponent('raycaster-listen', {
    schema: {
        // To generate a finite amount of lasers
        intersected: { default: 0 },
        // The angle difference of each laser
        angle: { default: 5 },
        // Whether this laser is pointing up or down
        up: { default: false },
    },
    init: function() {
        // Get the original laser in the scene
        this.origRaycaster = document.querySelector('#laser-output');
        // Get the block that collides with the laser
        this.block = document.querySelector('.block');
        this.origRaycaster.addEventListener('loaded', e => {
            console.log(this.origRaycaster.components['raycaster']);
        });
        // Use events to figure out what raycaster is listening so we don't have to
        // hardcode the raycaster.
        this.el.addEventListener('raycaster-intersected', evt => {
            this.raycaster = evt.detail.el;
        });
        this.el.addEventListener('raycaster-intersected-cleared', evt => {
            this.raycaster = null;
        });
        if (!this.raycaster) { return; } // Not intersecting.
    },

    tock: function() {
        if (!this.raycaster) { return; } // Not intersecting.
        var sceneEl = document.querySelector('a-scene');
        // If we haven't generated 20 lasers
        if (this.data.intersected < 20) {
            if (!this.raycaster) { return; } // Not intersecting.
            console.log(this.raycaster.components.raycaster.data);

            // If the laser is not intersecting with me, return
            let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
            if (!intersection) { return; }

            // Otherwise, increment intersected
            this.raycaster.components.raycaster.data.objects = ".block";
            this.data.intersected++;

            // Create a new laser generating box
            var newEl = document.createElement('a-box');
            newEl.setAttribute('color', 'red');

            // Set all the boxes attributes
            newEl.setAttribute('ammo-body', 'type: static');
            newEl.setAttribute('ammo-shape', 'type: box');
            newEl.setAttribute('width', '0.1');
            newEl.setAttribute('height', '0.1');
            newEl.setAttribute('depth', '0.1');
            // Place it at the point of intersection
            newEl.setAttribute('position', intersection.point);

            // Set the angle based on this.data.angle
            // If angle is positive, set first rotation to 0, second to angle
            if (this.data.angle > 0 && this.data.up) {
                newEl.setAttribute('rotation', '5 ' + (this.data.angle) + ' 0');
                this.data.up = false;
            }
            // Otherwise, set first rotation to 180
            else if (this.data.up) {
                newEl.setAttribute('rotation', '185 ' + (this.data.angle) + ' 0');
            } else if (this.data.angle > 0) {
                newEl.setAttribute('rotation', '-5 ' + (this.data.angle) + ' 0');
                this.data.up = true;
            } else {
                newEl.setAttribute('rotation', '175 ' + (this.data.angle) + ' 0');
            }

            // Add this script to the new element.
            if (this.data.angle == 5) {
                this.el.setAttribute('raycaster-listen', 'angle: -5');
            } else {
                this.el.setAttribute('raycaster-listen', 'angle: 5');
            }

            // Display the raycaster
            newEl.setAttribute('class', 'box');
            newEl.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 1; objects: .wall');

            sceneEl.appendChild(newEl);
        }
        // Check if the laser is colliding with the block
        let intersection = this.origRaycaster.components.raycaster.getIntersection(this.block);
        // If not, the lasers should be visible
        if (!intersection) {
            let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
            if (!intersection) { return; } else {
                // Make the lasers visible
                sceneEl.querySelectorAll('.box').forEach(box => {
                    box.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 1; objects: .wall');
                })
            }
            // If they are colliding, then make them invisible
        } else if (intersection.object.el.className == "block") {
            console.log(sceneEl);
            console.log(sceneEl.querySelectorAll('.box'));
            // Make other box lasers invisible
            sceneEl.querySelectorAll('.box').forEach(box => {
                box.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 0; objects: .wall');
            })
        } else {

            console.log(sceneEl);
            console.log(sceneEl.querySelectorAll('.box'));
            sceneEl.querySelectorAll('.box').forEach(box => {
                box.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 1; objects: .wall');
            })
        }
    }
});