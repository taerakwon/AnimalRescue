module state {
    var money: number;
    var timer: number;
    // Level 3 state class
    export class Level3 {
        // Private variables
        private level1Background: createjs.Bitmap;
        private moneyLabel: objects.Label;
        private level1Grass: createjs.Bitmap;
        private firetowerBtn: objects.Button;
        private icetowerBtn: objects.Button;
        private rocktowerBtn: objects.Button;
        private goldtowerBtn: objects.Button;
        private riflehunter: objects.Riflehunter;

        constructor() {         
            this._Main();
            // Give more money in level 3
            scoreBoard.startMoney += 100;  
        }

        // Update Method
        public update() {
            scoreBoard.update();
            collision.update();
            for (var hunter = 0; hunter < 20; hunter++) {
                riflehunters[hunter].update();
            }

            for (var tower = 0; tower < goldTowerArray.length; tower++) {
                goldTowerArray[tower].update();
            }

            for (var tower = 0; tower < rockTowerArray.length; tower++) {
                rockTowerArray[tower].update();
            }

            for (var missle = 0; missle < missleArray.length; missle++) {
                missleArray[missle].update();
            }

        }


        // Main method
        private _Main() {
            missleArray = [];
            this._destroy();
            
             
            // Instatiate level1Background
            this.level1Background = new createjs.Bitmap(assets.loader.getResult("level3"));
            game.addChild(this.level1Background);

            // Adding 6x4 grid to the game
            grid = new logic.Grid();               

            // Add Tower Buttons

            this.goldtowerBtn = new objects.Button("goldtower", "goldtowerDark");
            this.goldtowerBtn.x = 60;
            this.goldtowerBtn.y = 510;
            game.addChild(this.goldtowerBtn);
            this.goldtowerBtn.addEventListener("click", this._goldtowerBtn_Click);

            this.rocktowerBtn = new objects.Button("rocktower", "rocktowerDark");
            this.rocktowerBtn.x = 160;
            this.rocktowerBtn.y = 510;
            game.addChild(this.rocktowerBtn);
            this.rocktowerBtn.addEventListener("click", this._rocktowerBtn_Click);

            this.icetowerBtn = new objects.Button("icetower", "icetowerDark");
            this.icetowerBtn.x = 260;
            this.icetowerBtn.y = 510;
            game.addChild(this.icetowerBtn);
            this.icetowerBtn.addEventListener("click", this._icetowerBtn_Click);

            this.firetowerBtn = new objects.Button("firetower", "firetowerDark");
            this.firetowerBtn.x = 360;
            this.firetowerBtn.y = 510;
            game.addChild(this.firetowerBtn);
            this.firetowerBtn.addEventListener("click", this._firetowerBtn_Click);

            stage.on("click", grid.onClickEvent);                  
            
            // Add Scoreboard 
            scoreBoard = new objects.ScoreBoard();
            
            // Add Rifle hunter
            for (var i = 0; i < 20; i++) {
                riflehunters[i] = new objects.Riflehunter("rhunter");
                riflehunters[i].x = 800 + (200 * i);
                riflehunters[i].dx = -0.5; // Speed of Rifle hunter
                riflehunters[i].y = 100 + (100 * Math.floor((Math.random() * 4)));
                game.addChild(riflehunters[i]);
            }

            // Add Grass
            this.level1Grass = new createjs.Bitmap(assets.loader.getResult("level3Mist"));
            this.level1Grass.x = 700;
            this.level1Grass.y = 100;
            game.addChild(this.level1Grass);   

            // Instantiate Collision
            collision = new managers.Collision(riflehunters, missleArray);
                        
            // Add game container to stage
            stage.addChild(game);
        }

        // Method when gold tower button has been clicked
        private _goldtowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 50) {
                selectedTower = "goldtower";
            }
            else if (scoreBoard.startMoney < 50) {
                // Play Need Money Sound
                createjs.Sound.play("needMoney");
            }
        }

        // Method when rock tower button has been clicked
        private _rocktowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 50) {
                selectedTower = "rocktower";
            }
            else if (scoreBoard.startMoney < 50) {
                // Play Need Money Sound
                createjs.Sound.play("needMoney");
            }
        }

        // Method when ice tower button has been clicked
        private _icetowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 100) {
                selectedTower = "icetower";
            }
            else if (scoreBoard.startMoney < 100) {
                // Play Need Money Sound
                createjs.Sound.play("needMoney");
            }
        }

        // Method when fire tower button has been clicked
        private _firetowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 150) {
                selectedTower = "firetower";
            }
            else if (scoreBoard.startMoney < 150) {
                // Play Need Money Sound
                createjs.Sound.play("needMoney");
            }
        }

        private _destroy() {
            game.removeAllChildren();
            stage.removeAllChildren();
            // To reset tower arrays
            goldTowerArray = [];
            rockTowerArray = [];
            iceTowerArray = [];
            fireTowerArray = [];
        }

    }
}  