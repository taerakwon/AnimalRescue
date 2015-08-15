module objects {    
    // Missle class
    export class Missle extends objects.GameObject {
        public height: number;
        public width: number;
        private _counter: number = 30000;
        private _horizontal: number;
        private _vertical: number;
        private _attackSpeed: number;
        constructor(imageString: string, x: number, y: number, speed: number, damage: number) {
            super(imageString);
            this.damage = damage;
            this._vertical = y;
            this._horizontal = x;
            this._attackSpeed = speed;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = this._horizontal;
            this.y = this._vertical;
            this.isColliding = false;
            game.addChild(this);
        }

        public update() {
            this.x += this._attackSpeed;
            if (this.x > 700) {
                game.removeChild(this);
                this.reset();
            }
        }

        // resets missle back to original position where tower was built
        public reset(): void {
            this.x = this._horizontal;
            this.y = this._vertical;
            game.addChild(this);
            this.update();
        }
    }
} 