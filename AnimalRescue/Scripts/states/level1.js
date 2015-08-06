// Level 1 state
var state;
(function (state) {
    var Level1 = (function () {
        function Level1() {
            this._Main();
        }
        // Main method
        Level1.prototype._Main = function () {
            // Create game container
            game = new createjs.Container();
            // Instatiate level1Background
            this.level1Background = new createjs.Bitmap(assets.loader.getResult("level1"));
            game.addChild(this.level1Background);
            // Add game container to stage
            stage.addChild(game);
        };
        return Level1;
    })();
    state.Level1 = Level1;
})(state || (state = {}));
//# sourceMappingURL=level1.js.map