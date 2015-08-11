module objects {
    // Rock class
    export class Rock extends objects.GameObject {
        public dx;
        constructor() {
            super("rock");
            game.addChild(this);
        }

        update() {
            this._calcPosition();
        }

        private _calcPosition() {
            this.x += this.dx;
        }

    }
} 