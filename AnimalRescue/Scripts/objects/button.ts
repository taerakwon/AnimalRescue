module objects {
    // Button class
    export class Button extends createjs.Sprite {
        private image: string;
        private image1: string;
        // Constructor

        constructor(imageString: string, imageString1: string) {
            this.image = imageString;
            this.image1 = imageString1;
            super(assets.buttonAtlas, imageString);
            this.on("mouseover", this.over, this);
            this.on("mouseout", this.out, this);            
        }

        // Public methods
        public over(event: createjs.MouseEvent) {
            this.gotoAndStop(this.image1);
        }

        public out(event: createjs.MouseEvent) {
            this.gotoAndStop(this.image);
        }
    }
} 