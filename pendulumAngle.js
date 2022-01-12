AFRAME.registerComponent('pendulum-angle', {
    init: function() {
        this.text = document.querySelector('#angle-text');
        console.log(this.text);
    },
    tick: function() {
        var angle = Math.round(((90 - Math.abs(this.el.getAttribute('rotation').x)) * 10)) / 10;
        var stringAng = (angle.toString()).concat('\xB0');
        console.log(stringAng)
        this.text.setAttribute('text', 'value', stringAng);
    }
});