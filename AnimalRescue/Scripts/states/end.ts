module state {
    // End state class
    export class End {
        private laugh = createjs.Sound.play("laugh");
        private end: createjs.Bitmap;
        private startArrow: objects.Button;
        private replayButton: objects.Button;

        // Instruction state class
        constructor() {
            this._main();
        }

        public update() {
        }

        // Private methods
        private _main() {
        
            game.removeAllChildren();
            // Add Laugh Sound
            this.laugh.play();

            // Add introduction 
            this.end = new createjs.Bitmap(assets.loader.getResult("gameOver"));
            game.addChild(this.end);

            // Add back button
            this.startArrow = new objects.Button("arrowred", "arroworange");
            this.startArrow.x = 330;
            this.startArrow.y = 430;
            game.addChild(this.startArrow);
            this.startArrow.on("click", this._startArrowClick, this);

            // Add main menu button
            this.replayButton = new objects.Button("replayred", "replayorange");
            this.replayButton.x = 300;
            this.replayButton.y = 350;
            game.addChild(this.replayButton);
            this.replayButton.on("click", this._replayButtonClick, this);

        }

        // Destroy Method
        private _destroy() {
            this.laugh.stop();
            game.removeAllChildren();
        }

        // Instruction Method
        private _startArrowClick(event: createjs.MouseEvent) {
            this._destroy();
            currentState = config.START_STATE;
            changeState();
            this.startArrow.off("click", this._startArrowClick);
        }

        // Replay Method
        private _replayButtonClick(event: createjs.MouseEvent) {
            this._destroy();
            currentState = config.PLAY_STATE;
            changeState();
            this.startArrow.off("click", this._replayButtonClick);
        }
    }
} 