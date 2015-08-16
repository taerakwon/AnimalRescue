module objects {
    // Button class
    export class Button extends createjs.Sprite {
        private _image: string;
        private _image1: string;

        // Constructor

        constructor(imageString: string, imageString1: string) {
            this._image = imageString;
            this._image1 = imageString1;
            super(assets.buttonAtlas, imageString);
            this.on("mouseover", this.over, this);
            this.on("mouseout", this.out, this);            
        }

        // Public methods

        // When mouse is placed over
        public over(event: createjs.MouseEvent) {
            this.gotoAndStop(this._image1);
        }


        public out(event: createjs.MouseEvent) {
            this.gotoAndStop(this._image);
        }
    }
} 