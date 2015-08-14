// Play state
var state;
(function (state) {
    var money;
    var timer;
    var Play = (function () {
        function Play() {
            this._Main();
        }
        // Update Method
        Play.prototype.update = function () {
            scoreBoard.update();
            for (var hunter = 0; hunter < 10; hunter++) {
                bowhunter[hunter].update();
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
        };
        // Main method
        Play.prototype._Main = function () {
            // Create game container
            game = new createjs.Container;
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
                bowhunter[i] = new objects.Bowhunter("hunter");
                bowhunter[i].x = 800 + (200 * i);
                bowhunter[i].dx = -0.5;
                bowhunter[i].y = 100 + (100 * Math.floor((Math.random() * 4)));
                game.addChild(bowhunter[i]);
            }
            // Add Grass
            this.level1Grass = new createjs.Bitmap(assets.loader.getResult("level1Grass"));
            this.level1Grass.x = 700;
            this.level1Grass.y = 100;
            game.addChild(this.level1Grass);
            // Add game container to stage
            stage.addChild(game);
        };
        // Method when gold tower button has been clicked
        Play.prototype._goldtowerBtn_Click = function (event) {
            if (scoreBoard.startMoney >= 50) {
                selectedTower = "goldtower";
            }
            else if (scoreBoard.startMoney < 50) {
                window.alert("Not enought money");
            }
        };
        // Method when rock tower button has been clicked
        Play.prototype._rocktowerBtn_Click = function (event) {
            if (scoreBoard.startMoney >= 50) {
                selectedTower = "rocktower";
            }
            else if (scoreBoard.startMoney < 50) {
                window.alert("Not enought money");
            }
        };
        // Method when ice tower button has been clicked
        Play.prototype._icetowerBtn_Click = function (event) {
            if (scoreBoard.startMoney >= 100) {
                selectedTower = "icetower";
            }
            else if (scoreBoard.startMoney < 100) {
                window.alert("Not enought money");
            }
        };
        // Method when fire tower button has been clicked
        Play.prototype._firetowerBtn_Click = function (event) {
            if (scoreBoard.startMoney >= 150) {
                selectedTower = "firetower";
            }
            else if (scoreBoard.startMoney < 150) {
                window.alert("Not enought money");
            }
        };
        // Method to update each towers in placedTower array
        /*
        private _towersUpdate() {
            if (placedTower.length > 0) {
                for (var index in placedTower) {
                    placedTower[index].update();
                }
            }
        }
        */
        Play.prototype._destroy = function () {
            game.removeAllChildren();
        };
        return Play;
    })();
    state.Play = Play;
})(state || (state = {}));
//# sourceMappingURL=play.js.map