var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Button class
    var Button = (function (_super) {
        __extends(Button, _super);
        // Constructor
        function Button(imageString, imageString1) {
            this.image = imageString;
            this.image1 = imageString1;
            _super.call(this, assets.buttonAtlas, imageString);
            this.on("mouseover", this.over, this);
            this.on("mouseout", this.out, this);
        }
        // Public methods
        Button.prototype.over = function (event) {
            this.gotoAndStop(this.image1);
        };
        Button.prototype.out = function (event) {
            this.gotoAndStop(this.image);
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map