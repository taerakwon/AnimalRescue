﻿module objects {

    // Bow hunter class 
    export class Bowhunter extends createjs.Sprite
    {
        dx: number;
        damage: number = 25;
        health: number = 300;

        constructor(imageString: string) {
            super(assets.bowhunterAtlas, imageString);
        }

        update() {
            this.x += this.dx;
            if (this.x == 50) {
                this.destroy();
                currentState = config.START_STATE;
                changeState();
            }
        }

        destroy() {
            game.removeAllChildren();
        }

    }
}