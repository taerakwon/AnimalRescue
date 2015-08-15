var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Firetower class
    var Goldtower = (function (_super) {
        __extends(Goldtower, _super);
        function Goldtower(towerName, x, y) {
            _super.call(this, towerName);
            this.name = "goldtower";
            this.sound = "goldtower";
            this.cost = 50;
            this.attackSpeed = 0;
            this.health = 150;
            this.damage = 0;
            this.isAvailable = true;
            this.x = x;
            this.y = y;
            goldTowerBuilt += 1;
        }
        Goldtower.prototype.update = function () {
            console.log("goldtower");
            this._generateGold();
        };
        Goldtower.prototype._generateGold = function () {
            scoreBoard.startMoney += 0.05;
        };
        Goldtower.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Goldtower;
    })(objects.Tower);
    objects.Goldtower = Goldtower;
})(objects || (objects = {}));
//# sourceMappingURL=goldtower.js.map