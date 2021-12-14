// turn controller's physics presence on only while button held down
AFRAME.registerComponent('phase-shift', {
    init: function() {
        var el = this.el
        el.addEventListener('gripdown', function() {
            el.setAttribute('ammo-body', { disableCollision: false })
        })
        el.addEventListener('gripup', function() {
            el.setAttribute('ammo-body', { disableCollision: true })
        })
        el.addEventListener('thumbup', function() {
            el.setAttribute('ammo-body', { disableCollision: false })
        })
        el.addEventListener('pistolstart', function() {
            el.setAttribute('ammo-body', { disableCollision: false })
        })
    }
})