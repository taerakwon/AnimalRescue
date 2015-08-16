module objects {   

    // Scoreboard class
    export class ScoreBoard {
        // PUBLIC PROPERTIES        
        public startMoney: number = 100;
        public score: number;
        private scoreLabel: objects.Label;
        private moneyLabel: objects.Label;


        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            this.score = score;
            this.moneyLabel = new objects.Label(this.startMoney.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 120, 40);
            this.scoreLabel = new objects.Label(this.score.toString(), config.FONT_MEDIUM, config.FONT_FAMILY, config.FONT_WHITE, 640, 40);
            game.addChild(this.moneyLabel);
            game.addChild(this.scoreLabel);

        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.moneyLabel.text = Math.round(this.startMoney).toString();
            this.scoreLabel.text = this.score.toString();
            score = this.score; // To set global score

            // If state is play state
            if (currentState == config.PLAY_STATE) {
                // When last hunter is killed, move to stage 2
                if (score == 10) {
                    currentState = config.LEVEL2_STATE;
                    setTimeout(() => changeState(), 1000);
                }
            }
            // If state is level 2
            else if (currentState == config.LEVEL2_STATE) {
                if (score == 20) {
                    currentState = config.LEVEL3_STATE;
                    setTimeout(() => changeState(), 1000);
                }
            }
            // If state is level 3
            else if (currentState == config.LEVEL3_STATE) {
                if (score == 30) {
                    currentState = config.WIN_STATE;
                    setTimeout(() => changeState(), 1000);
                }
            }

        }
    }
} 