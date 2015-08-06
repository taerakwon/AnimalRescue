var logic;
(function (logic) {
    var Grid = (function () {
        function Grid() {
            this.game = new createjs.Container();
            this._gridGenerator();
        }
        Grid.prototype.update = function () {
        };
        Grid.prototype._gridGenerator = function () {
            var rowCells = 6;
            var columnCells = 4;
            var row = 1;
            var cellNumber = 1;
            // Grid array contains 6 cells with 4 number value 1
            for (var i = 0; i < columnCells; i++) {
                var cellArray = [];
                for (var j = 1; j <= rowCells; j++) {
                    cell = new objects.Tower("emptyDark");
                    cell.name = "empty";
                    cell.x = 100 * j;
                    cell.y = 100 * row;
                    cell.isAvailable = true;
                    cell.assetName = cellNumber;
                    console.log("cellNumber: " + cellNumber.toString());
                    cellNumber += 1;
                    cellArray.push(cell);
                }
                gridArray.push(cellArray);
                console.log("vertical: " + i);
                row += 1;
            }
            for (var arrayIndex in gridArray) {
                game.addChild(gridArray[arrayIndex][0]);
                game.addChild(gridArray[arrayIndex][1]);
                game.addChild(gridArray[arrayIndex][2]);
                game.addChild(gridArray[arrayIndex][3]);
                game.addChild(gridArray[arrayIndex][4]);
                game.addChild(gridArray[arrayIndex][5]);
            }
        };
        Grid.prototype.onClickEvent = function (event) {
            // First row ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            gridArray[0][0].on("click", function (event) {
                if (gridArray[0][0].name == "empty") {
                    if (selectedTower[0].name != "empty") {
                        selectedTower[0].x = gridArray[0][0].x;
                        selectedTower[0].y = gridArray[0][0].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[0][0].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[0][1].on("click", function (event) {
                if (gridArray[0][1].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[0][1].x;
                        selectedTower[0].y = gridArray[0][1].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[0][1].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[0][2].on("click", function (event) {
                if (gridArray[0][2].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[0][2].x;
                        selectedTower[0].y = gridArray[0][2].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[0][2].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[0][3].on("click", function (event) {
                if (gridArray[0][3].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[0][3].x;
                        selectedTower[0].y = gridArray[0][3].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[0][3].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[0][4].on("click", function (event) {
                if (gridArray[0][4].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[0][4].x;
                        selectedTower[0].y = gridArray[0][4].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[0][4].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[0][5].on("click", function (event) {
                if (gridArray[0][5].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[0][5].x;
                        selectedTower[0].y = gridArray[0][5].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[0][5].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            // Second row ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            gridArray[1][0].on("click", function (event) {
                if (gridArray[1][0].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[1][0].x;
                        selectedTower[0].y = gridArray[1][0].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[1][0].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[1][1].on("click", function (event) {
                if (gridArray[1][1].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[1][1].x;
                        selectedTower[0].y = gridArray[1][1].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[1][1].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[1][2].on("click", function (event) {
                if (gridArray[1][2].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[1][2].x;
                        selectedTower[0].y = gridArray[1][2].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[1][2].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[1][3].on("click", function (event) {
                if (gridArray[1][3].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[1][3].x;
                        selectedTower[0].y = gridArray[1][3].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[1][3].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[1][4].on("click", function (event) {
                if (gridArray[1][4].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[1][4].x;
                        selectedTower[0].y = gridArray[1][4].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[1][4].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[1][5].on("click", function (event) {
                if (gridArray[1][5].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[1][5].x;
                        selectedTower[0].y = gridArray[1][5].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[1][5].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            // Third row ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            gridArray[2][0].on("click", function (event) {
                if (gridArray[2][0].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[2][0].x;
                        selectedTower[0].y = gridArray[2][0].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[2][0].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[2][1].on("click", function (event) {
                if (gridArray[2][1].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[2][1].x;
                        selectedTower[0].y = gridArray[2][1].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[2][1].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[2][2].on("click", function (event) {
                if (gridArray[2][2].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[2][2].x;
                        selectedTower[0].y = gridArray[2][2].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[2][2].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[2][3].on("click", function (event) {
                if (gridArray[2][3].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[2][3].x;
                        selectedTower[0].y = gridArray[2][3].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[2][3].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[2][4].on("click", function (event) {
                if (gridArray[2][4].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[2][4].x;
                        selectedTower[0].y = gridArray[2][4].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[2][4].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[2][5].on("click", function (event) {
                if (gridArray[2][5].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[2][5].x;
                        selectedTower[0].y = gridArray[2][5].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[2][5].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            // Fourth row ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            gridArray[3][0].on("click", function (event) {
                if (gridArray[3][0].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[3][0].x;
                        selectedTower[0].y = gridArray[3][0].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[3][0].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[3][1].on("click", function (event) {
                if (gridArray[3][1].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[3][1].x;
                        selectedTower[0].y = gridArray[3][1].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[3][1].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[3][2].on("click", function (event) {
                if (gridArray[3][2].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[3][2].x;
                        selectedTower[0].y = gridArray[3][2].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[3][2].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[3][3].on("click", function (event) {
                if (gridArray[3][3].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[3][3].x;
                        selectedTower[0].y = gridArray[3][3].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[3][3].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[3][4].on("click", function (event) {
                if (gridArray[2][4].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[3][4].x;
                        selectedTower[0].y = gridArray[3][4].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[3][4].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
            gridArray[3][5].on("click", function (event) {
                if (gridArray[3][5].name == "empty") {
                    if (selectedTower[0] != "empty") {
                        selectedTower[0].x = gridArray[3][5].x;
                        selectedTower[0].y = gridArray[3][5].y;
                        var money = scoreBoard.startMoney;
                        scoreBoard.startMoney = money - selectedTower[0].cost;
                        game.addChild(selectedTower[0]);
                        gridArray[3][5].name = selectedTower[0].name;
                        selectedTower[0] = "empty";
                    }
                    else {
                        console.log("Please select your tower");
                    }
                }
                else {
                    console.log("CANNOT BUILD");
                }
            });
        };
        return Grid;
    })();
    logic.Grid = Grid;
})(logic || (logic = {}));
//# sourceMappingURL=grid.js.map