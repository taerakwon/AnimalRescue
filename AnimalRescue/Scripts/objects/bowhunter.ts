module objects {

    // Bow hunter class 
    export class Bowhunter extends createjs.Sprite {
        public height: number;
        public width: number;
        public health: number = 200;
        dx: number;
        damage: number = 25;
        public dead: boolean = false;


        constructor(imageString: string) {
            super(assets.bowhunterAtlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

        update() {
            this.x += this.dx;
            if (this.x <= 50) {
                this.destroy();
                game.removeAllChildren();
                stage.removeAllChildren();
                missleArray = [];
                currentState = config.END_STATE;                 
                changeState();
            }
        }

        destroy() {
            game.removeChild(this);
        }

    }
}