module managers {
    // Asset Manager Class
    export class Assets {
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet; // Sprites
        public buttonAtlas: createjs.SpriteSheet;
        public instructionAtlas: createjs.SpriteSheet;
        public background: createjs.SpriteSheet; // Sprites for background
        public towerAtlas: createjs.SpriteSheet;
        public bowhunterAtlas: createjs.SpriteSheet;
        public knifehunterAtlas: createjs.SpriteSheet;
        public riflehunterAtlas: createjs.SpriteSheet;


        // Image and Sound Manifest
        private manifest = [
            { id: "startScreen", src: "assets/images/startScreen.png" },
            { id: "gradient", src: "assets/images/gradient.png" },
            { id: "introduction", src: "assets/images/introduction.png" },
            { id: "level1", src: "assets/images/level1.png" },
            { id: "level2", src: "assets/images/level2.png" },
            { id: "level3", src: "assets/images/level3.png" },
            { id: "level1Grass", src: "assets/images/level1Grass.png" },
            { id: "level2Tree", src: "assets/images/level2Tree.png" },
            { id: "level3Mist", src: "assets/images/level3Mist.png" },                        
            { id: "fire", src: "assets/images/fire.png" },
            { id: "ice", src: "assets/images/ice.png" },
            { id: "rock", src: "assets/images/rock.png" },
            { id: "gold", src: "assets/images/gold.png" },
            { id: "gameOver", src: "assets/images/gameover.png" },
            { id: "win", src: "assets/images/win.png" },


            //sounds
            { id: "bgm", src: "assets/audio/bgm.mp3" },
            { id: "click", src: "assets/audio/click.mp3" },
            { id: "needMoney", src: "assets/audio/needMoney.mp3" },
            { id: "beback", src: "assets/audio/beback.mp3" },
            { id: "laugh", src: "assets/audio/laugh.mp3" },
            { id: "victory", src: "assets/audio/victory.mp3" }            
        ];

        // Assets for buttons
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

        // Assets for towers
        private towerManifest = {
            "images": [
                "assets/images/towerAtlas.png"
            ],

            "frames": [
                [2, 2, 100, 100, 0, 0, 0],
                [104, 2, 76, 100, 0, -11, 0],
                [182, 2, 85, 98, 0, -7, -2],
                [269, 2, 100, 92, 0, 0, -2],
                [371, 2, 89, 91, 0, -5, -6],
                [269, 96, 1, 1, 0, 0, 0]
            ],

            "animations": {
                "emptyDark": [0],
                "firetower": [1],
                "icetower": [2],
                "rocktower": [3],
                "goldtower": [4],
                "empty": [5]
            }
        };

        // Assets for bowhunters
        private bowhunterManifest = {
            "images": [
                "assets/images/bowhunterAtlas.png"
            ],

            "frames": [
                [2, 2, 81, 95, 0, -19, -5],
                [85, 2, 84, 93, 0, -16, -7],
                [171, 2, 84, 92, 0, -16, -8],
                [257, 2, 71, 92, 0, -13, -8],
                [330, 2, 68, 92, 0, -17, -8],
                [400, 2, 83, 91, 0, -17, -9],
                [485, 2, 82, 91, 0, -17, -9],
                [569, 2, 79, 91, 0, -16, -9],
                [650, 2, 68, 90, 0, -15, -10]
            ],

            "animations": {
                "hunter": {
                    frames: [5, 0, 2, 1, 4, 3, 7, 6, 8],
                    speed: 0.15
                }
            }
        };

        // Assets for Knife hunters
        private knifehunterManifest = {
            "images": [
                "assets/images/knifeHunterAtlas.png"
            ],

            "frames": [

                [187, 2, 93, 91, 0, -7, -9],
                [2, 2, 88, 93, 0, -12, -7],
                [92, 2, 93, 92, 0, -7, -8],
                [282, 2, 93, 91, 0, -7, -9],
                [558, 2, 77, 90, 0, -8, -10],
                [714, 2, 76, 87, 0, -8, -13],
                [469, 2, 87, 91, 0, -8, -9],
                [377, 2, 90, 91, 0, -9, -9],
                [637, 2, 75, 90, 0, -8, -10]
            ],

            "animations": {
                "ahunter": {
                    frames: [2, 0, 1, 3, 6, 8, 5, 4, 7],
                    speed: 0.15
                }
            }
        };

        // Assets for rifle hunters
        private riflehunterManifest = {
            "images": [
                "assets/images/rifleHunterAtlas.png"
            ],

            "frames": [

                [265, 2, 86, 91, 0, -14, -9],
                [2, 2, 82, 93, 0, -18, -7],
                [86, 2, 88, 92, 0, -12, -8],
                [176, 2, 87, 91, 0, -13, -9],
                [525, 2, 72, 90, 0, -13, -10],
                [671, 2, 71, 87, 0, -13, -13],
                [441, 2, 82, 91, 0, -13, -9],
                [353, 2, 86, 91, 0, -13, -9],
                [599, 2, 70, 90, 0, -13, -10]
            ],

            "animations": {
                "rhunter": {
                    frames: [3, 0, 1, 2, 6, 8, 5, 4, 7],
                    speed: 0.15
                }
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
            this.towerAtlas = new createjs.SpriteSheet(this.towerManifest);
            this.bowhunterAtlas = new createjs.SpriteSheet(this.bowhunterManifest);
            this.knifehunterAtlas = new createjs.SpriteSheet(this.knifehunterManifest);
            this.riflehunterAtlas = new createjs.SpriteSheet(this.riflehunterManifest);
        }

    }
} 