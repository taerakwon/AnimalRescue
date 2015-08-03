module state {
    export class Instruction {
        private introduction: createjs.Bitmap;
        private startArrow: objects.Button;

        // Instruction state class
        constructor() {
            this._main();
        }

        public update() {
        }

        // Private methods
        private _main() {
            game = new createjs.Container();


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
            stage.addChild(game);            
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