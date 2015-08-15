module objects {

    // Bow hunter class 
    export class Riflehunter extends createjs.Sprite {
        public height: number;
        public width: number;
        public health: number = 500;
        public dead: boolean = false;
        dx: number;
        damage: number = 50;


        constructor(imageString: string) {
            super(assets.riflehunterAtlas, imageString);
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
            game.removeAllChildren();
        }

    }
}