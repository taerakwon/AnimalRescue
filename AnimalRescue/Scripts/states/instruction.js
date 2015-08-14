var state;
(function (state) {
    var Instruction = (function () {
        // Instruction state class
        function Instruction() {
            this._main();
        }
        Instruction.prototype.update = function () {
        };
        // Private methods
        Instruction.prototype._main = function () {
            this._destroy();
            // Add introduction 
            this.introduction = new createjs.Bitmap(assets.loader.getResult("introduction"));
            game.addChild(this.introduction);
            // Add back button
            this.startArrow = new objects.Button("arrowred", "arroworange");
            this.startArrow.x = 625;
            this.startArrow.y = 25;
            game.addChild(this.startArrow);
            this.startArrow.on("click", this._startArrowClick, this);
            // Add game container to stage
            //stage.addChild(game);            
        };
        // Destroy Method
        Instruction.prototype._destroy = function () {
            game.removeAllChildren();
        };
        // Instruction Method
        Instruction.prototype._startArrowClick = function (event) {
            currentState = config.START_STATE;
            changeState();
            this.startArrow.off("click", this._startArrowClick);
        };
        return Instruction;
    })();
    state.Instruction = Instruction;
})(state || (state = {}));
//# sourceMappingURL=instruction.js.map