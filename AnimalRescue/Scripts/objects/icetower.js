var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ice tower class
    var Icetower = (function (_super) {
        __extends(Icetower, _super);
        // Constructor
        function Icetower(towerName, x, y) {
            _super.call(this, towerName);
            this.name = "icetower";
            this.cost = 100; // Tower cost
            this.attackSpeed = 3; // Tower attack speed
            this.damage = 100; // Tower damage
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var ice;
            ice = new objects.Missile("ice", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missileArray.push(ice); // Pushing into missleArray
        }
        // Destroy Method
        Icetower.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Icetower;
    })(objects.Tower);
    objects.Icetower = Icetower;
})(objects || (objects = {}));
//# sourceMappingURL=icetower.js.map