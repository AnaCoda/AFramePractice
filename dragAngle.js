AFRAME.registerComponent('drag-angle', {
    init: function() {
        var el = this.el; // <a-box>
        el.addEventListener('mouseenter', function() {
            el.setAttribute('color', '#24CAFF');
            console.log('mouseenter');
        });
        el.addEventListener('mouseleave', function() {
            el.setAttribute('color', '#EF2D5E');
        });
        el.addEventListener('click', function() {
            el.setAttribute('scale', { x: 2, y: 1, z: 2 });
            console.log('click');
        });
    }
});