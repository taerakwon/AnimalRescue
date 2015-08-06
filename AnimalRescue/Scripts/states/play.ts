// Play state
module state {
    var money: number;
    var hunters = [];
    var timer: number;

    export class Play {
        // Private variables
        private level1Background: createjs.Bitmap;
        private moneyLabel: objects.Label;
        private level1Grass: createjs.Bitmap;
        private firetowerBtn: objects.Button;
        private icetowerBtn: objects.Button;
        private rocktowerBtn: objects.Button;
        private goldtowerBtn: objects.Button;

        private bowhunter: objects.Bowhunter;

        constructor() {
            this._Main();
        }

        // Update Method
        public update() {
            scoreBoard.update();
            this._hunterUpdate();
        }


        // Main method
        private _Main() {                     
            
            // Create game container
            game = new createjs.Container();

            // Instatiate level1Background
            this.level1Background = new createjs.Bitmap(assets.loader.getResult("level1"));
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

            // Add Bowhunter
            for (var i = 0; i < 10; i++) {
                this.bowhunter = new objects.Bowhunter("hunter");
                this.bowhunter.x = 800+(200*i);
                this.bowhunter.dx = -2;          
                this.bowhunter.y = 100 + (100 * Math.floor((Math.random() * 4)));                
                hunters.push(this.bowhunter);     
                game.addChild(hunters[i]);
            }

            // Add Grass
            this.level1Grass = new createjs.Bitmap(assets.loader.getResult("level1Grass"));
            this.level1Grass.x = 700;
            this.level1Grass.y = 100;
            game.addChild(this.level1Grass);   

            // Add game container to stage
            stage.addChild(game);       
        }

        private _goldtowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 50) {
                selectedTower[0] = new objects.Goldtower("goldtower");
            }
            else if (scoreBoard.startMoney < 50) {
                window.alert("Not enought money");
            }
        }

        private _rocktowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 50) {
                selectedTower[0] = new objects.Rocktower("rocktower");
            }
            else if (scoreBoard.startMoney < 50) {
                window.alert("Not enought money");
            }            
        }

        private _icetowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 100) {
                selectedTower[0] = new objects.Icetower("icetower");
            }
            else if (scoreBoard.startMoney < 100) {
                window.alert("Not enought money");
            }                        
        }

        private _firetowerBtn_Click(event: createjs.MouseEvent) {
            if (scoreBoard.startMoney >= 150) {
                selectedTower[0] = new objects.Firetower("firetower"); 
            }
            else if (scoreBoard.startMoney < 150) {
                window.alert("Not enought money");
            }                                           
        }

        private _hunterUpdate() {
            hunters[0].update();
            hunters[1].update();
            hunters[2].update();
            hunters[3].update();
            hunters[4].update();
            hunters[5].update();
            hunters[6].update();
            hunters[7].update();
            hunters[8].update();
            hunters[9].update();
        }

        
    }
}