AFRAME.registerComponent('raycaster-listen', {
    schema: {
        intersected: { default: 0 },
        angle: { default: 5 }
    },
    init: function() {
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

        if (this.data.intersected < 5) {
            if (!this.raycaster) { return; } // Not intersecting.
            console.log(this.raycaster.components.raycaster.data);
            let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
            // If the intersection object is part of wall class
            console.log(intersection.object.el.className);
            // Disable the current raycaster from colliding with the new element.

            if (!intersection) { return; }

            this.raycaster.components.raycaster.data.objects = '.shit';
            console.log(this.raycaster.components.raycaster.data);
            console.log(intersection.point);
            this.data.intersected++;

            console.log(this.data.angle);

            var newEl = document.createElement('a-box');
            newEl.setAttribute('color', 'red');
            var sceneEl = document.querySelector('a-scene');
            //ammo-body="type: static" ammo-shape="type: box" position="-10 0.05 -5.05" rotation="175 20 0" width="0.1" height="0.1" depth="0.1"
            newEl.setAttribute('ammo-body', 'type: static');
            newEl.setAttribute('ammo-shape', 'type: box');
            newEl.setAttribute('width', '0.1');
            newEl.setAttribute('height', '0.1');
            newEl.setAttribute('depth', '0.1');
            newEl.setAttribute('position', intersection.point);
            // Set the angle based on this.data.angle
            // If angle is positive, set first rotation to 0, second to angle
            if (this.data.angle > 0) {
                newEl.setAttribute('rotation', '0 ' + (this.data.angle) + ' 0');
            }
            // Otherwise, set first rotation to 180
            else {
                newEl.setAttribute('rotation', '180 ' + (this.data.angle) + ' 0');
            }

            // Add this script to the new element.
            if (this.data.angle == 5) {
                this.el.setAttribute('raycaster-listen', 'angle: -5');
            } else {
                this.el.setAttribute('raycaster-listen', 'angle: 5');
            }

            //raycaster="showLine: true; far: 100; lineColor: red; lineOpacity: 1"

            newEl.setAttribute('class', 'box');
            newEl.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: blue; lineOpacity: 1; ');

            sceneEl.appendChild(newEl);
        }
    }
});