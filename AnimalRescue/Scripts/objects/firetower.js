var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Firetower class
    var Firetower = (function (_super) {
        __extends(Firetower, _super);
        function Firetower(towerName) {
            _super.call(this, towerName);
            this.name = "firetower";
            this.sound = "firetower";
            this.cost = 150;
            this.attackSpeed = 1;
            this.health = 300;
            this.damage = 100;
            this.isAvailable = true;
            var burnDamage = 25;
        }
        Firetower.prototype.destroy = function () {
            game.removeChild(this);
        };
        Firetower.prototype.update = function () {
        };
        return Firetower;
    })(objects.Tower);
    objects.Firetower = Firetower;
})(objects || (objects = {}));
//# sourceMappingURL=firetower.js.map