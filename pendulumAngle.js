AFRAME.registerComponent('pendulum-angle', {
    init: function() {
        // Get the angle text object
        this.text = document.querySelector('#angle-text');
        console.log(this.text);
    },
    tick: function() {
        // Set it to the angle of the pendulum weight
        var angle = Math.round(((Math.abs(this.el.getAttribute('rotation').x)) * 10)) / 10;
        // Add a degree symbol (not working for some reason)
        var stringAng = (angle.toString()).concat('\xB0');
        console.log(stringAng)
        this.text.setAttribute('text', 'value', stringAng);
    }
});