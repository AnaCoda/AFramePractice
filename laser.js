AFRAME.registerComponent('raycaster-listen', {
    schema: {
        intersected: { default: false },
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

        while (!this.data.intersected) {
            let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
            if (!intersection) { return; }
            console.log(intersection.point);
            this.data.intersected = true;

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
                newEl.setAttribute('rotation', '150 ' + (this.data.angle) + ' 0');
            }
            // Disable the current raycaster from colliding with the new element.
            this.raycaster.components.raycaster.data.objects = ['a-d'];
            // Add this script to the new element.
            if (this.data.angle == 5) {
                newEl.setAttribute('raycaster-listen', 'angle: -5');
            } else {
                newEl.setAttribute('raycaster-listen', 'angle: 5');
            }

            //raycaster="showLine: true; far: 100; lineColor: red; lineOpacity: 1"


            newEl.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: blue; lineOpacity: 1');

            sceneEl.appendChild(newEl);
        }
    }
});