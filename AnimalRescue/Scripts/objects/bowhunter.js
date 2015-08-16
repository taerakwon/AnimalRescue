var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bow hunter class 
    var Bowhunter = (function (_super) {
        __extends(Bowhunter, _super);
        // Constructor
        function Bowhunter(imageString) {
            _super.call(this, assets.bowhunterAtlas, imageString);
            this.health = 200; // Bow hunter health
            this.dead = false;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        // Update method
        Bowhunter.prototype.update = function () {
            this.x += this.dx;
            // When bow hunter passes 50 pixel from the left
            if (this.x <= 50) {
                this.destroy();
                game.removeAllChildren();
                stage.removeAllChildren();
                missileArray = []; // Reseting missleArray 
                currentState = config.END_STATE;
                changeState();
            }
        };
        // Destroy method
        Bowhunter.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Bowhunter;
    })(createjs.Sprite);
    objects.Bowhunter = Bowhunter;
})(objects || (objects = {}));
//# sourceMappingURL=bowhunter.js.map