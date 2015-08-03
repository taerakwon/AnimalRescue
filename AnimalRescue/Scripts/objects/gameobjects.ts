module objects {
    export class GameObject extends createjs.Sprite {

        // Public properties
        public width: number;
        public height: number;
        public name: string = "";
        public sound: string = "";
        public isColliding: boolean = false;
        public health: number;
        public damage: number;

        // Protected properties
        protected dx: number;
        protected dy: number;

        // Constructor
        constructor(imageString: string) {
            super(assets.atlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
    }
} 