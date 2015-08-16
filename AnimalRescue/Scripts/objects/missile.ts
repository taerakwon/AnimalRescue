module objects {    
    // Missile class
    export class Missile extends objects.GameObject {
        public height: number;
        public width: number;
        private _horizontal: number; // x value of tower
        private _vertical: number; // y value of tower
        private _attackSpeed: number; // attack speed of tower
        // Constructor
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

        // Update method
        public update() {
            this.x += this._attackSpeed;
            if (this.x > 700) {
                game.removeChild(this);
                this.reset();
            }
        }

        // resets missile back to original position where tower was built
        public reset(): void {
            this.x = this._horizontal;
            this.y = this._vertical;
            game.addChild(this);
            this.update();
        }
    }
} 