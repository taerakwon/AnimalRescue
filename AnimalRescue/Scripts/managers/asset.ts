﻿module managers {
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
            { id: "introduction", src: "assets/images/introduction.png" },
            { id: "level1", src: "assets/images/level1.png" },
            { id: "level1Grass", src: "assets/images/level1Grass.png" }
        ];

        private buttonManifest = {
            "images": [
                "assets/images/buttonAtlas.png"
            ],


            "frames": [
                [2, 2, 206, 53, 0, 0, 0],
                [210, 2, 137, 89, 0, 0, 0],
                [2, 57, 137, 89, 0, 0, 0],
                [141, 57, 61, 80, 0, -9, 0],
                [204, 93, 206, 53, 0, 0, 0],
                [349, 2, 139, 25, 0, 0, 0],
                [349, 29, 139, 25, 0, 0, 0],
                [349, 56, 70, 24, 0, 0, 0],
                [412, 82, 80, 80, 0, 0, 0],
                [421, 56, 70, 24, 0, 0, 0],
                [2, 148, 80, 80, 0, 0, 0],
                [84, 148, 80, 80, 0, 0, 0],
                [166, 148, 80, 77, 0, 0, 0],
                [248, 148, 80, 74, 0, 0, -2],
                [330, 148, 69, 79, 0, -5, -1],
                [401, 164, 69, 69, 0, -5, -5]
            ],

            "animations": {
                "replayorange": [0],
                "arroworange": [1],
                "arrowred": [2],
                "firetower": [3],
                "replayred": [4],
                "instructionorange": [5],
                "instructionred": [6],
                "startorange": [7],
                "firetowerDark": [8],
                "startred": [9],
                "goldtowerDark": [10],
                "icetowerDark": [11],
                "rocktowerDark": [12],
                "rocktower": [13],
                "icetower": [14],
                "goldtower": [15]
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