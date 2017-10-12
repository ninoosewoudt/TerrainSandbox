GameStates.Preloader = function(game) {
    this.preloadBar = null;
}



GameStates.Preloader.prototype = {

    preload: function() {
        // //loadingbar
        // this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
        // this.load.setPreloadSprite(this.preloadBar);

        // load all game assets
        this.load.image('background', "Assets/app.png");
        this.load.image('sky', "Assets/sky.png");
    


    },

    create: function() {
        //start
        this.state.start('Level1');

    }
};