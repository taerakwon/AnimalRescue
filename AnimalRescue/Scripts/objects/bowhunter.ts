module objects {

    // Bow hunter class 
    export class Bowhunter extends createjs.Sprite {
        public height: number;
        public width: number;
        public health: number = 300;
        dx: number;
        damage: number = 25;


        constructor(imageString: string) {
            super(assets.bowhunterAtlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

        update() {
            this.x += this.dx;
            if (this.x == 50) {
                this.destroy();
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