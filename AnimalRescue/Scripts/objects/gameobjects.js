var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // Constructor
        function GameObject(imageString) {
            _super.call(this, assets.loader.getResult(imageString));
            this.name = "";
            this.sound = "";
            this.isColliding = false;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjects.js.map