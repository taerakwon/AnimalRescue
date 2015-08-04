module objects {
    export class ScoreBoard {
        // PUBLIC PROPERTIES
        public score: number = 0;
        public money: number = 100;

        private scoreLabel: objects.Label;
        private moneyLabel: objects.Label;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            this.moneyLabel = new objects.Label(this.money.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 90, 40);
            this.scoreLabel = new objects.Label(this.score.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 630, 40);
            game.addChild(this.moneyLabel);
            game.addChild(this.scoreLabel);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.moneyLabel.text = this.money.toString();
            this.scoreLabel.text = this.score.toString();
        }
    }
} 