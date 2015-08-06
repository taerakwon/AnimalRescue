var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function ScoreBoard() {
            // PUBLIC PROPERTIES
            this.score = 0;
            this.startMoney = 100;
            this.moneyLabel = new objects.Label(this.startMoney.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 90, 40);
            this.scoreLabel = new objects.Label(this.score.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 630, 40);
            game.addChild(this.moneyLabel);
            game.addChild(this.scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.moneyLabel.text = this.startMoney.toString();
            this.scoreLabel.text = this.score.toString();
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map