module managers {
    // Asset Manager Class
    export class Assets {               
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet; // Sprites
        public titleAtlas: createjs.SpriteSheet;
        public background: createjs.SpriteSheet; // Sprites for background

        // Image and Sound Manifest
        private manifest = [
            { id: "startScreen", src: "assets/images/startScreen.png" },
            { id: "gradient", src: "assets/images/gradient.png" }
        ];

        private titleManifest = {
            "images": [
                "assets/images/titleAtlas.png"
            ],

            "frames": [
                [2, 2, 139, 25, 0, 0, 0],
                [143, 2, 139, 25, 0, 0, 0],
                [284, 2, 70, 24, 0, 0, 0],
                [356, 2, 70, 24, 0, 0, 0]
            ],

            "animations": {
                "instructionorange": [0],
                "instructionred": [1],
                "startorange": [2],
                "startred": [3]
            }
        };


        // Default Constructor
        constructor() {
            this.init();
        }

        init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // Event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            this.titleAtlas = new createjs.SpriteSheet(this.titleManifest);
        }

    }
} 