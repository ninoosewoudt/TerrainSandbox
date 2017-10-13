GameStates.Level1 = function(game) {

};
GameStates.Level1.prototype = {
    init: function() {
        this.game.renderer.renderSession.roundPixels = true;
        this.game.world.setBounds(0, 0, 992, 600);
        this.physics.startSystem(Phaser.Physics.ARCADE);
    },
    create: function() {
        this.sky = this.add.sprite(0, 0, 'sky');
        this.background = this.add.bitmapData(800, 600);
        this.background.draw('background');
        this.background.update();
        this.background.addToWorld();

    },
    update: function() {
        if (this.input.activePointer.isDown) {
            var x = this.input.activePointer.position.x | 0;
            var y = this.input.activePointer.position.y | 0;
            this.background.blendDestinationOut();
            this.background.circle(x, y, 20, 'rgba(0, 0, 0, 255');
            this.background.blendReset();
            this.background.update();
        }
    }
}