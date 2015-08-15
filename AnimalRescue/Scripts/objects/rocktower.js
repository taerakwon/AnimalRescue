var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Rocktower class    
    var Rocktower = (function (_super) {
        __extends(Rocktower, _super);
        function Rocktower(towerName, x, y) {
            _super.call(this, towerName);
            this.name = "rocktower";
            this.sound = "rocktower";
            this.cost = 50;
            this.health = 100;
            this.damage = 50;
            this.attackSpeed = 5;
            this.isAvailable = true;
            this.x = x;
            this.y = y;
            towerBuilt += 1;
            var rock;
            rock = new objects.Missle("rock", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missleArray.push(rock);
        }
        Rocktower.prototype.destroy = function () {
            game.removeChild(this);
        };
        Rocktower.prototype.update = function () {
        };
        return Rocktower;
    })(objects.Tower);
    objects.Rocktower = Rocktower;
})(objects || (objects = {}));
//# sourceMappingURL=rocktower.js.map