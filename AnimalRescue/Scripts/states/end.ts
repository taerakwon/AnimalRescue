module state {
    export class End {
        private end: createjs.Bitmap;
        private startArrow: objects.Button;

        // Instruction state class
        constructor() {
            this._main();
        }

        public update() {
        }

        // Private methods
        private _main() {
            game.removeAllChildren();
            // Add introduction 
            this.end = new createjs.Bitmap(assets.loader.getResult("gameOver"));
            game.addChild(this.end);

            // Add back button
            this.startArrow = new objects.Button("arrowred", "arroworange");
            this.startArrow.x = 330;
            this.startArrow.y = 330;
            game.addChild(this.startArrow);
            this.startArrow.on("click", this._startArrowClick, this);
        }

        // Destroy Method
        private _destroy() {
            game.removeAllChildren();
        }

        // Instruction Method
        private _startArrowClick(event: createjs.MouseEvent) {
            this._destroy();
            currentState = config.START_STATE;
            changeState();
            this.startArrow.off("click", this._startArrowClick);
        }
    }
} 