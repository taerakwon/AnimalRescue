module objects {   

    // Scoreboard class
    export class ScoreBoard {
        // PUBLIC PROPERTIES        
        public startMoney: number = 300;
        public score: number = 0;
        private scoreLabel: objects.Label;
        private moneyLabel: objects.Label;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            this.moneyLabel = new objects.Label(this.startMoney.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 90, 40);
            this.scoreLabel = new objects.Label(this.score.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 630, 40);
            game.addChild(this.moneyLabel);
            game.addChild(this.scoreLabel);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.moneyLabel.text = Math.round(this.startMoney).toString();
            this.scoreLabel.text = this.score.toString();
            score = this.score; // To set global score

            // If state is play state
            if (currentState == config.PLAY_STATE)
            {
                if (score > 3000) {
                    currentState = config.LEVEL2_STATE;
                    changeState();
                }
            }

            // If state is level 2
            else if (currentState == config.LEVEL2_STATE)
            {
                if (score > 9000) {
                    currentState = config.LEVEL3_STATE;
                    changeState();
                }
            }

        }
    }
} 