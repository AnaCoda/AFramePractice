AFRAME.registerComponent('drag-angle', {
    init: function() {
        var el = this.el; // <a-box>
        this.ifMouseDown = false;
        this.x_cord = 0;
        this.y_cord = 0;
        el.addEventListener('mouseenter', function() {
            el.setAttribute('color', '#24CAFF');
            console.log('mouseenter');
        });
        el.addEventListener('mouseleave', function() {
            el.setAttribute('color', '#EF2D5E');
        });
        el.addEventListener('mousemove', function() {
            el.setAttribute('color', '#FFFFFF');
        })
    }
});