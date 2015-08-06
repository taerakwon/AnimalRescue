var state;
(function (state) {
    // Start state class
    var Start = (function () {
        function Start() {
            this._main();
        }
        Start.prototype.update = function () {
            gradient.update();
        };
        // Main method
        Start.prototype._main = function () {
            // Instantiate new game container
            game = new createjs.Container();
            // Add gradient
            gradient = new objects.Gradient(assets.loader.getResult("gradient"));
            game.addChild(gradient);
            // Add start menu screen to stage
            startScreen = new createjs.Bitmap(assets.loader.getResult("startScreen"));
            game.addChild(startScreen);
            // Add buttons to stage
            this.startButton = new objects.Button("startorange", "startred");
            this.startButton.x = 370;
            this.startButton.y = 380;
            game.addChild(this.startButton);
            this.startButton.on("click", this._playClick, this);
            this.instructionButton = new objects.Button("instructionorange", "instructionred");
            this.instructionButton.x = 335;
            this.instructionButton.y = 420;
            game.addChild(this.instructionButton);
            this.instructionButton.on("click", this._instructionClick, this);
            // Add game container to stage
            stage.addChild(game);
        };
        // Destroy Method
        Start.prototype._destroy = function () {
            game.removeAllChildren();
        };
        // Instruction Method
        Start.prototype._instructionClick = function (event) {
            this._destroy();
            currentState = config.INSTRUCTION_STATE;
            changeState();
            this.instructionButton.off("click", this._instructionClick);
        };
        // Play Method
        Start.prototype._playClick = function (event) {
            this._destroy();
            currentState = config.PLAY_STATE;
            changeState();
            this.startButton.off("click", this._playClick);
        };
        return Start;
    })();
    state.Start = Start;
})(state || (state = {}));
//# sourceMappingURL=start.js.map