﻿module state {    
    // Start state class
    export class Start {        
        
        private startButton: objects.Button;
        private instructionButton: objects.Button;
        

        constructor() {
            this._main();
        }

        public update() {
            gradient.update();
        }

        // Main method
        private _main() { 
            this._destroy;
                  
            // Add gradient
            gradient = new objects.Gradient(assets.loader.getResult("gradient"))
            game.addChild(gradient);

            // Add start menu screen to stage
            startScreen = new createjs.Bitmap(assets.loader.getResult("startScreen"));
            game.addChild(startScreen);

            // Play BGM
            bgm = createjs.Sound.play("bgm", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0); 

            // Add buttons to stage
            this.startButton = new objects.Button("startorange", "startred");
            this.startButton.x = 370;
            this.startButton.y = 380;
            game.addChild(this.startButton);
            this.startButton.on("click", this._playClick, this);

            this.instructionButton = new objects.Button("instructionorange", "instructionred");
            this.instructionButton.x = 335;
            this.instructionButton.y = 420;
            game.addChild(this.instructionButton);
            this.instructionButton.on("click", this._instructionClick, this);
                        

            // Add game container to stage
            //stage.addChild(game);
        }

        // Destroy Method
        private _destroy() {
            game.removeAllChildren();
        }

        // Instruction Method
        private _instructionClick(event: createjs.MouseEvent) {
            this._destroy();
            bgm.destroy();
            currentState = config.INSTRUCTION_STATE;
            changeState();            
            this.instructionButton.off("click", this._instructionClick);
        }

        // Play Method
        private _playClick(event: createjs.MouseEvent) {
            this._destroy();
            bgm.destroy();
            currentState = config.PLAY_STATE;
            changeState();
            this.startButton.off("click", this._playClick);
        }
    }
}