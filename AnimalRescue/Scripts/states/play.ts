// Play state
module state {
    var money: number;

    export class Play {
        // Private variables
        private level1Background: createjs.Bitmap;
        private moneyLabel: objects.Label;
        private level1Grass: createjs.Bitmap;

        private fireTower: objects.Button;
        private icetower: objects.Button;
        private rocktower: objects.Button;
        private goldtower: objects.Button;

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

            // Add Grass
            this.level1Grass = new createjs.Bitmap(assets.loader.getResult("level1Grass"));
            this.level1Grass.x = 700;
            this.level1Grass.y = 100;
            game.addChild(this.level1Grass);            

            // Add Tower Buttons
            this.fireTower = new objects.Button("firetower", "firetowerDark");
            this.fireTower.x = 60;
            this.fireTower.y = 510;
            game.addChild(this.fireTower);

            this.icetower = new objects.Button("icetower", "icetowerDark");
            this.icetower.x = 160;
            this.icetower.y = 510;
            game.addChild(this.icetower);

            this.rocktower = new objects.Button("rocktower", "rocktowerDark");
            this.rocktower.x = 260;
            this.rocktower.y = 510;
            game.addChild(this.rocktower);

            this.goldtower = new objects.Button("goldtower", "goldtowerDark");
            this.goldtower.x = 360;
            this.goldtower.y = 510;
            game.addChild(this.goldtower);

            // Add game container to stage
            stage.addChild(game);
        }
    }
}