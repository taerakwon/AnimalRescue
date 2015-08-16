module objects {

    // Bow hunter class 
    export class Bowhunter extends createjs.Sprite {
        public height: number;
        public width: number;
        public health: number = 200; // Bow hunter health
        dx: number;
        public dead: boolean = false;

        // Constructor
        constructor(imageString: string) {
            super(assets.bowhunterAtlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

        // Update method
        update() {
            this.x += this.dx;
            // When bow hunter passes 50 pixel from the left
            if (this.x <= 50) {
                this.destroy();
                game.removeAllChildren();
                stage.removeAllChildren();
                missileArray = []; // Reseting missleArray 
                currentState = config.END_STATE;                 
                changeState();
            }
        }

        // Destroy method
        destroy() {
            game.removeChild(this);
        }

    }
}