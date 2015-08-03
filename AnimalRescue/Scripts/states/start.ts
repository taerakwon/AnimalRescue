module state {    
    export class Start {        
        private startButton: objects.Button;
        private instructionButton: objects.Button;

        constructor() {
            this.main();
        }

        // Main method
        public main() {
            // Instantiate new game container
            game = new createjs.Container();

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
    }
}