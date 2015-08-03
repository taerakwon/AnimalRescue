module managers {
    // Asset Manager Class
    export class Assets {
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet; // Sprites
        public buttonAtlas: createjs.SpriteSheet;
        public instructionAtlas: createjs.SpriteSheet;
        public background: createjs.SpriteSheet; // Sprites for background

        // Image and Sound Manifest
        private manifest = [
            { id: "startScreen", src: "assets/images/startScreen.png" },
            { id: "gradient", src: "assets/images/gradient.png" },
            { id: "introduction", src: "assets/images/introduction.png" }
        ];

        private buttonManifest = {
            "images": [
                "assets/images/buttonAtlas.png"
            ],

            "frames": [
                [2, 2, 137, 89, 0, 0, 0],
                [141, 2, 137, 89, 0, 0, 0],
                [280, 2, 206, 53, 0, 0, 0],
                [280, 57, 139, 25, 0, 0, 0],
                [421, 57, 139, 25, 0, 0, 0],
                [488, 2, 206, 53, 0, 0, 0],
                [562, 57, 70, 24, 0, 0, 0],
                [634, 57, 70, 24, 0, 0, 0]
            ],

            "animations": {
                "arroworange": [0],
                "arrowred": [1],
                "replayorange": [2],
                "instructionorange": [3],
                "instructionred": [4],
                "replayred": [5],
                "startorange": [6],
                "startred": [7]
            }
        };

        // Default Constructor
        constructor() {
            this.init();
        }

        public init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // Event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            this.buttonAtlas = new createjs.SpriteSheet(this.buttonManifest);
        }

    }
} 