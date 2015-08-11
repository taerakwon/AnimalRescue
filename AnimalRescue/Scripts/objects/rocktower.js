var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Firetower class    
    var x;
    var y;
    var Rocktower = (function (_super) {
        __extends(Rocktower, _super);
        function Rocktower(towerName, x, y) {
            _super.call(this, towerName);
            this.name = "rocktower";
            this.sound = "rocktower";
            this.cost = 50;
            this.health = 100;
            this.damage = 75;
            this.attackSpeed = 8;
            this.isAvailable = true;
            rock = new objects.Rock;
            this.x = x;
            this.y = y;
            rock.x = this.x + 40;
            rock.y = this.y + 20;
            rock.dx = this.attackSpeed;
        }
        Rocktower.prototype.destroy = function () {
            game.removeChild(this);
        };
        Rocktower.prototype.update = function () {
            rock.update();
            if (rock.x > 500) {
                this.reset();
            }
        };
        Rocktower.prototype.reset = function () {
            rock.x = this.x + 20;
            rock.y = this.y + 40;
        };
        return Rocktower;
    })(objects.Tower);
    objects.Rocktower = Rocktower;
})(objects || (objects = {}));
//# sourceMappingURL=rocktower.js.map