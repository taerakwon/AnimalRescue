var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Background Gradient Class +++++++++++++++++++++++++++++++++++++++
    var Gradient = (function (_super) {
        __extends(Gradient, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Gradient(assetName) {
            _super.call(this, assetName);
            this.dx = 20;
            // Gets Width and Height of Image being inserted
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        // PRIVATE METHOD THAT CHECKS BOUNDARY ++++++++++++++++
        Gradient.prototype._checkBound = function () {
            // If gradient image reaches the most left side of the canvas, call reset function
            if (this.x == -800) {
                this._reset();
            }
            if (this.x == 0) {
                this._reset();
            }
        };
        // RESET FUNCTION +++++++++++++++++++++++++++++++++++++
        Gradient.prototype._reset = function () {
            this.dx = this.dx * -1; // Starts the gradient image off the screen
            this.y = 0;
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        Gradient.prototype.update = function () {
            this.x += this.dx; // How much image moves in horizontal
            this._checkBound();
        };
        return Gradient;
    })(createjs.Bitmap);
    objects.Gradient = Gradient;
})(objects || (objects = {}));
//# sourceMappingURL=gradient.js.map