var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Firetower class
    var Rocktower = (function (_super) {
        __extends(Rocktower, _super);
        function Rocktower(towerName) {
            _super.call(this, towerName);
            this.name = "rocktower";
            this.sound = "rocktower";
            this.cost = 50;
            this.attackSpeed = 1;
            this.health = 100;
            this.damage = 75;
            this.isAvailable = true;
        }
        Rocktower.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Rocktower;
    })(objects.Tower);
    objects.Rocktower = Rocktower;
})(objects || (objects = {}));
//# sourceMappingURL=rocktower.js.map