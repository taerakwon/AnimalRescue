var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function ScoreBoard() {
            // PUBLIC PROPERTIES        
            this.startMoney = 300;
            this.score = 0;
            this.moneyLabel = new objects.Label(this.startMoney.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 90, 40);
            this.scoreLabel = new objects.Label(this.score.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 630, 40);
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
                if (score > 3000) {
                    currentState = config.LEVEL2_STATE;
                    changeState();
                }
            }
            else if (currentState == config.LEVEL2_STATE) {
                if (score > 9000) {
                    currentState = config.LEVEL3_STATE;
                    changeState();
                }
            }
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map