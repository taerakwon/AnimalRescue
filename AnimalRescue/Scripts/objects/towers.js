var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Tower = (function (_super) {
        __extends(Tower, _super);
        // Constructor
        function Tower(imageString) {
            _super.call(this, assets.towerAtlas, imageString);
            this.sound = "";
        }
        Tower.prototype._update = function () {
        };
        return Tower;
    })(createjs.Sprite);
    objects.Tower = Tower;
})(objects || (objects = {}));
//# sourceMappingURL=towers.js.map