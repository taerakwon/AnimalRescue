module state {    
    export class Start {        
        private startButton: objects.Button;
        private instructionButton: objects.Button;
        

        constructor() {
            this.main();
        }

        public update() {
            gradient.update();
        }

        // Main method
        private main() {
            // Instantiate new game container
            game = new createjs.Container();

            // Add gradient
            gradient = new objects.Gradient(assets.loader.getResult("gradient"))
            game.addChild(gradient);

            // Add start menu screen to stage
            startScreen = new createjs.Bitmap(assets.loader.getResult("startScreen"));
            game.addChild(startScreen);

            // Add buttons to stage
            this.startButton = new objects.Button("startorange", "startred");
            this.startButton.x = 370;
            this.startButton.y = 380;
            game.addChild(this.startButton);

            this.instructionButton = new objects.Button("instructionorange", "instructionred");
            this.instructionButton.x = 335;
            this.instructionButton.y = 420;
            game.addChild(this.instructionButton);

            

            // Add game container to stage
            stage.addChild(game);
        }

        // Destroy Method
        private destroy() {
            game.removeAllChildren();
        }

        // Instruction Method
        private instructionClick(event: createjs.MouseEvent) {
            this.destroy();
            currentState = config.INSTRUCTION_STATE;
            changeState();            
            this.instructionButton.off("click", this.instructionClick);
        }
    }
}