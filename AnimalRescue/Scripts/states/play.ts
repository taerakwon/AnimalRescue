// Play state
module state {
    var money: number;

    export class Play {
        // Private variables
        private level1Background: createjs.Bitmap;
        private moneyLabel: objects.Label;
        private level1Grass: createjs.Bitmap;

        constructor() {
            this._Main();
        }

        // Update Method
        public update() {
        }


        // Main method
        private _Main() {
            // Spawn Money
            money = 100;           
            
            // Create game container
            game = new createjs.Container();

            // Instatiate level1Background
            this.level1Background = new createjs.Bitmap(assets.loader.getResult("level1"));
            game.addChild(this.level1Background);

            // Add Scoreboard
            scoreBoard = new objects.ScoreBoard();

            // Adds Grass
            this.level1Grass = new createjs.Bitmap(assets.loader.getResult("level1Grass"));
            this.level1Grass.x = 700;
            this.level1Grass.y = 100;
            game.addChild(this.level1Grass);            

            // Add game container to stage
            stage.addChild(game);
        }
    }
}