AFRAME.registerComponent("physics-frictions", {
    init: function() {
        var sceneEl = this.el;
        var floorEl = sceneEl.querySelector("#ground");
        var boxEl = sceneEl.querySelector(".block");
        floorEl.body.setFriction(5);
        boxEl.body.setFriction(5);
    },
});