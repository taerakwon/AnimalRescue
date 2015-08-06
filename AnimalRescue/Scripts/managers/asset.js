var managers;
(function (managers) {
    // Asset Manager Class
    var Assets = (function () {
        // Default Constructor
        function Assets() {
            // Image and Sound Manifest
            this.manifest = [
                { id: "startScreen", src: "assets/images/startScreen.png" },
                { id: "gradient", src: "assets/images/gradient.png" },
                { id: "introduction", src: "assets/images/introduction.png" },
                { id: "level1", src: "assets/images/level1.png" },
                { id: "level1Grass", src: "assets/images/level1Grass.png" }
            ];
            this.buttonManifest = {
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
            this.towerManifest = {
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
            this.init();
        }
        Assets.prototype.init = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // Event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            this.buttonAtlas = new createjs.SpriteSheet(this.buttonManifest);
            this.towerAtlas = new createjs.SpriteSheet(this.towerManifest);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map