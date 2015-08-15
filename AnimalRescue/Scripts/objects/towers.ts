module objects {

    // Tower class
    export class Tower extends createjs.Sprite {

        // Public properties
        public name: string;
        public assetName: number;
        public sound: string = "";
        public cost: number;
        public health: number;
        public damage: number;
        public attackSpeed: number;
        public isAvailable: boolean;

        // Constructor
        constructor(imageString: string) {
            super(assets.towerAtlas, imageString);
        }

        private _update() {

        }
    }
}