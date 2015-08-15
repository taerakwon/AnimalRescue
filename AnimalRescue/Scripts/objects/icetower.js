var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Firetower class
    var Icetower = (function (_super) {
        __extends(Icetower, _super);
        function Icetower(towerName, x, y) {
            _super.call(this, towerName);
            this.name = "icetower";
            this.sound = "icetower";
            this.cost = 100;
            this.attackSpeed = 4;
            this.health = 200;
            this.damage = 50;
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var ice;
            ice = new objects.Missle("ice", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missleArray.push(ice);
        }
        Icetower.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Icetower;
    })(objects.Tower);
    objects.Icetower = Icetower;
})(objects || (objects = {}));
//# sourceMappingURL=icetower.js.map