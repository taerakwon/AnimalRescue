module objects {

    // Knife hunter class 
    export class Knifehunter extends createjs.Sprite {
        public height: number;
        public width: number;
        public health: number = 300; // Health of knife hunter
        public dead: boolean = false; 
        dx: number;

        // Constructor
        constructor(imageString: string) {
            super(assets.knifehunterAtlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

        // Update method
        update() {
            this.x += this.dx;
            if (this.x <= 50) {
                this.destroy();
                game.removeAllChildren();
                stage.removeAllChildren();
                missileArray = [];
                currentState = config.END_STATE;
                changeState();
            }
        }
        // Destroy method
        destroy() {
            game.removeAllChildren();
        }

    }
} 