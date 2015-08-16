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
        // Constructor
        function Firetower(towerName, x, y) {
            _super.call(this, towerName);
            this.name = "firetower";
            this.cost = 150; // Cost of fire tower
            this.attackSpeed = 4; // Attack speed
            this.damage = 130; // Damage
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var fire;
            fire = new objects.Missile("fire", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missileArray.push(fire); // Pushing into missleArray
        }
        // Destroy method
        Firetower.prototype.destroy = function () {
            game.removeChild(this);
        };
        // Update method
        Firetower.prototype.update = function () {
        };
        return Firetower;
    })(objects.Tower);
    objects.Firetower = Firetower;
})(objects || (objects = {}));
//# sourceMappingURL=firetower.js.map