var objects;
(function (objects) {
    // Scoreboard class
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function ScoreBoard() {
            // PUBLIC PROPERTIES        
            this.startMoney = 100;
            this.score = score;
            this.moneyLabel = new objects.Label(this.startMoney.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 120, 40);
            this.scoreLabel = new objects.Label(this.score.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 640, 40);
            game.addChild(this.moneyLabel);
            game.addChild(this.scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.moneyLabel.text = Math.round(this.startMoney).toString();
            this.scoreLabel.text = this.score.toString();
            score = this.score; // To set global score
            // If state is play state
            if (currentState == config.PLAY_STATE) {
                // When last hunter is killed, move to stage 2
                if (score == 10) {
                    currentState = config.LEVEL2_STATE;
                    setTimeout(function () { return changeState(); }, 1000);
                }
            }
            else if (currentState == config.LEVEL2_STATE) {
                if (score == 20) {
                    currentState = config.LEVEL3_STATE;
                    setTimeout(function () { return changeState(); }, 1000);
                }
            }
            else if (currentState == config.LEVEL3_STATE) {
                if (score == 30) {
                    currentState = config.WIN_STATE;
                    setTimeout(function () { return changeState(); }, 1000);
                }
            }
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map