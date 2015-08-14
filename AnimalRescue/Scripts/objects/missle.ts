module objects {    
    // Missle class
    export class Missle extends objects.GameObject {      
        public height: number;
        public width: number;
        private horizontal: number;
        private vertical: number;
        private attackSpeed: number;
        constructor(imageString: string, x: number, y: number, speed: number) {            
            super(imageString);                                                          
            this.vertical = y;
            this.horizontal = x;
            this.attackSpeed = speed;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = this.horizontal;
            this.y = this.vertical;
            game.addChild(this);
        }

        public update(): void {
            this.x += 2;
            if (this.x > 710) {
                game.removeChild(this);
                this.reset();
            }

            //if (this.x > 710) {
            //    this.reset();
            //}
        }

        public reset(): void {
            this.x = this.horizontal;
            this.y = this.vertical;
            game.addChild(this);
            this.update();
        }
    }
} 