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
        function Bowhunter(imageString) {
            _super.call(this, assets.bowhunterAtlas, imageString);
            this.health = 300;
            this.damage = 25;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        Bowhunter.prototype.update = function () {
            this.x += this.dx;
            if (this.x == 50) {
                this.destroy();
                missleArray = [];
                currentState = config.END_STATE;
                changeState();
            }
        };
        Bowhunter.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Bowhunter;
    })(createjs.Sprite);
    objects.Bowhunter = Bowhunter;
})(objects || (objects = {}));
//# sourceMappingURL=bowhunter.js.map