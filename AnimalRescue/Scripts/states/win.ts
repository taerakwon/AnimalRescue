module state {
    // Winstate class
    export class Winstate {
        private victoryMusic = createjs.Sound.play("victory");
        private congrats: createjs.Bitmap;
        private startArrow: objects.Button;
        private replayButton: objects.Button;

        // Constructor
        constructor() {
            this._main();
        }

        public update() {
        }

        // Main methods
        private _main() {
            game.removeAllChildren();
            
            // Add Victory sound clip
            this.victoryMusic.play();

            // Add Congratulation image
            this.congrats = new createjs.Bitmap(assets.loader.getResult("win"));
            game.addChild(this.congrats);

            // Add return to start button
            this.startArrow = new objects.Button("arrowred", "arroworange");
            this.startArrow.x = 570;
            this.startArrow.y = 400;
            game.addChild(this.startArrow);
            this.startArrow.on("click", this._startArrowClick, this);

            // Add replay button
            this.replayButton = new objects.Button("replayred", "replayorange");
            this.replayButton.x = 550;
            this.replayButton.y = 510;
            game.addChild(this.replayButton);
            this.replayButton.on("click", this._replayButtonClick, this);

        }

        // Destroy Method
        private _destroy() {
            this.victoryMusic.stop();
            game.removeAllChildren();
            stage.removeAllChildren();

            // To reset tower arrays
            goldTowerArray = [];
            rockTowerArray = [];
            iceTowerArray = [];
            fireTowerArray = [];
        }

        // Return to start method
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