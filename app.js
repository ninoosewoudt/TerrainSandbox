window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

    //  Add the States your game has.
    game.state.add('Boot', GameStates.Boot);
    game.state.add('Preloader', GameStates.Preloader);
    game.state.add('MainMenu', GameStates.MainMenu);
    game.state.add('Level1', GameStates.Level1);
    


    //  Now start the Boot state.
    game.state.start('Boot');

};