var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Cell = (function (_super) {
        __extends(Cell, _super);
        function Cell(imageString) {
            _super.call(this, imageString);
            this.isAvailable = true;
        }
        return Cell;
    })(objects.Tower);
    objects.Cell = Cell;
})(objects || (objects = {}));
//# sourceMappingURL=cell.js.map