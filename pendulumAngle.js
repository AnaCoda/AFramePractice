AFRAME.registerComponent('pendulum-angle', {
    init: function() {
        this.text = document.querySelector('#angle-text');
        console.log(this.text);
    },
    tick: function() {
        var angle = Math.round(((90 - Math.abs(this.el.getAttribute('rotation').y)) * 10)) / 10;
        this.text.setAttribute('text', 'value', angle.toString());
    }
});