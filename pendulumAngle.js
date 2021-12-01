AFRAME.registerComponent('pendulum-angle', {
    init: function() {
        // Solution for Getting Entities.
        //this.pendulum = document.querySelector('#pend');

        this.text = document.querySelector('#angle-text');
        console.log(this.text);
    },
    tick: function() {
        var angle = Math.round(((90 - Math.abs(this.el.getAttribute('rotation').y)) * 10)) / 10;
        console.log(angle);
        this.text.setAttribute('text', 'value', angle.toString());
        console.log(this.text);
    }
});