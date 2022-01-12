AFRAME.registerComponent('raycaster-listen', {
    schema: {
        intersected: { default: 0 },
        angle: { default: 5 },
        up: { default: false },
    },
    init: function() {
        this.origRaycaster = document.querySelector('#laser-output');
        this.block = document.querySelector('.block');
        console.log("hello");
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
        if (this.data.intersected < 20) {
            if (!this.raycaster) { return; } // Not intersecting.
            console.log(this.raycaster.components.raycaster.data);
            let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
            // If the intersection object is part of wall class
            console.log(intersection.object.el.className);
            // Disable the current raycaster from colliding with the new element.

            if (!intersection) { return; }
            this.raycaster.components.raycaster.data.objects = ".block";
            console.log(this.raycaster.components.raycaster.data);
            console.log(intersection.point);
            this.data.intersected++;

            console.log(this.data.angle);

            var newEl = document.createElement('a-box');
            newEl.setAttribute('color', 'red');

            //ammo-body="type: static" ammo-shape="type: box" position="-10 0.05 -5.05" rotation="175 20 0" width="0.1" height="0.1" depth="0.1"
            newEl.setAttribute('ammo-body', 'type: static');
            newEl.setAttribute('ammo-shape', 'type: box');
            newEl.setAttribute('width', '0.1');
            newEl.setAttribute('height', '0.1');
            newEl.setAttribute('depth', '0.1');
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

            //raycaster="showLine: true; far: 100; lineColor: red; lineOpacity: 1"

            newEl.setAttribute('class', 'box');
            newEl.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 1; objects: .wall');

            sceneEl.appendChild(newEl);
        }
        let intersection = this.origRaycaster.components.raycaster.getIntersection(this.block);
        // Disable the current raycaster from colliding with the new element.
        if (!intersection) {
            let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
            if (!intersection) { return; } else {
                console.log(sceneEl);
                console.log(sceneEl.querySelectorAll('.box'));
                // Remove each box from the scene.
                sceneEl.querySelectorAll('.box').forEach(box => {
                    //box.parentNode.removeChild(box);
                    box.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 1; objects: .wall');
                })
            }
        }
        // If the intersection object is part of wall class
        console.log(intersection.object.el.className);
        if (intersection.object.el.className == "block") {
            console.log(sceneEl);
            console.log(sceneEl.querySelectorAll('.box'));
            // Remove each box from the scene.
            sceneEl.querySelectorAll('.box').forEach(box => {
                //box.parentNode.removeChild(box);
                box.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 0; objects: .wall');
            })
        } else {

            console.log(sceneEl);
            console.log(sceneEl.querySelectorAll('.box'));
            // Remove each box from the scene.
            sceneEl.querySelectorAll('.box').forEach(box => {
                //box.parentNode.removeChild(box);
                box.setAttribute('raycaster', 'showLine: true; far: 100; lineColor: red; lineOpacity: 1; objects: .wall');
            })
        }
    }
});