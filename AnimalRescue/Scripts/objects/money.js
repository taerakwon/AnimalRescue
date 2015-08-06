var objects;
(function (objects) {
    var startMoney;
    // Money class
    var Money = (function () {
        function Money() {
            // Public variable
            this.startMoney = 100;
        }
        // Public Methods
        Money.prototype.update = function () {
        };
        // Private Methods
        Money.prototype.calculate = function () {
        };
        return Money;
    })();
    objects.Money = Money;
})(objects || (objects = {}));
//# sourceMappingURL=money.js.map