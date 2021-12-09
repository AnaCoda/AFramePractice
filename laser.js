AFRAME.registerComponent('phase-shift', {
    init: function() {
        function createRay(evt) {
            var config = this.config;
            var data = this.data;
            var el = this.el;
            var self = this;

            el.setAttribute('raycaster', 'showLine', true);

        }

        function hideRay() {
            el.setAttribute('raycaster', 'showLine', false);
        }
    }
});