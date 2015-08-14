var logic;
(function (logic) {
    var generated = false;
    game = new createjs.Container();
    var Grid = (function () {
        function Grid() {
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
            generated = true;
        };
        Grid.prototype.onClickEvent = function (event) {
            var tower;
            // First row ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            gridArray[0][0].on("click", function (event) {
                if (gridArray[0][0].name == "empty") {
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[0][0].x, gridArray[0][0].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[0][0].x, gridArray[0][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[0][0].x, gridArray[0][0].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[0][0].x, gridArray[0][0].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                var tower;
                if (gridArray[0][1].name == "empty") {
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[0][1].x, gridArray[0][1].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[0][1].x, gridArray[0][1].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[0][1].x, gridArray[0][1].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[0][1].x, gridArray[0][1].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[0][2].x, gridArray[0][2].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[0][2].x, gridArray[0][2].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[0][2].x, gridArray[0][2].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[0][2].x, gridArray[0][2].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[0][3].x, gridArray[0][3].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[0][3].x, gridArray[0][3].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[0][3].x, gridArray[0][3].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[0][3].x, gridArray[0][3].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[0][4].x, gridArray[0][4].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[0][4].x, gridArray[0][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[0][4].x, gridArray[0][4].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[0][4].x, gridArray[0][4].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[0][5].x, gridArray[0][5].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[0][5].x, gridArray[0][5].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[0][5].x, gridArray[0][5].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[0][5].x, gridArray[0][5].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[1][0].x, gridArray[1][0].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[1][0].x, gridArray[1][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[1][0].x, gridArray[1][0].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[1][0].x, gridArray[1][0].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[1][1].x, gridArray[1][1].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[1][1].x, gridArray[1][1].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[1][1].x, gridArray[1][1].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[1][1].x, gridArray[1][1].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[1][2].x, gridArray[1][2].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[1][2].x, gridArray[1][2].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[1][2].x, gridArray[1][2].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[1][2].x, gridArray[1][2].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[1][3].x, gridArray[1][3].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[1][3].x, gridArray[1][3].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[1][3].x, gridArray[1][3].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[1][3].x, gridArray[1][3].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[1][4].x, gridArray[1][4].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[1][4].x, gridArray[1][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[1][4].x, gridArray[1][4].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[1][4].x, gridArray[1][4].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[1][5].x, gridArray[1][5].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[1][5].x, gridArray[1][5].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[1][5].x, gridArray[1][5].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[1][5].x, gridArray[1][5].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[2][0].x, gridArray[2][0].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[2][0].x, gridArray[2][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[2][0].x, gridArray[2][0].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[2][0].x, gridArray[2][0].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[2][1].x, gridArray[2][1].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[2][1].x, gridArray[2][1].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[2][1].x, gridArray[2][1].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[2][1].x, gridArray[2][1].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[2][2].x, gridArray[2][2].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[2][2].x, gridArray[2][2].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[2][2].x, gridArray[2][2].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[2][2].x, gridArray[2][2].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[2][3].x, gridArray[2][3].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[2][3].x, gridArray[2][3].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[2][3].x, gridArray[2][3].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[2][3].x, gridArray[2][3].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[2][4].x, gridArray[2][4].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[2][4].x, gridArray[2][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[2][4].x, gridArray[2][4].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[2][4].x, gridArray[2][4].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[2][5].x, gridArray[2][5].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[2][5].x, gridArray[2][5].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[2][5].x, gridArray[2][5].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[2][5].x, gridArray[2][5].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[3][0].x, gridArray[3][0].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[3][0].x, gridArray[3][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[3][0].x, gridArray[3][0].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[3][0].x, gridArray[3][0].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[3][1].x, gridArray[3][1].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[3][1].x, gridArray[3][1].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[3][1].x, gridArray[3][1].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[3][1].x, gridArray[3][1].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[3][2].x, gridArray[3][2].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[3][2].x, gridArray[3][2].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[3][2].x, gridArray[3][2].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[3][2].x, gridArray[3][2].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[3][3].x, gridArray[3][3].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[3][3].x, gridArray[3][3].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[3][3].x, gridArray[3][3].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[3][3].x, gridArray[3][3].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                if (gridArray[3][4].name == "empty") {
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[3][4].x, gridArray[3][4].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[3][4].x, gridArray[3][0].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[3][4].x, gridArray[3][4].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[3][4].x, gridArray[3][4].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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
                    if (selectedTower != "empty") {
                        switch (selectedTower) {
                            case "rocktower":
                                tower = new objects.Rocktower(selectedTower, gridArray[3][5].x, gridArray[3][5].y);
                                rockTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                            case "firetower":
                                tower = new objects.Firetower(selectedTower, gridArray[3][5].x, gridArray[3][5].y);
                                fireTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 150;
                                break;
                            case "icetower":
                                tower = new objects.Icetower(selectedTower, gridArray[3][5].x, gridArray[3][5].y);
                                iceTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 100;
                                break;
                            case "goldtower":
                                tower = new objects.Goldtower(selectedTower, gridArray[3][5].x, gridArray[3][5].y);
                                goldTowerArray.push(tower);
                                game.addChild(tower);
                                scoreBoard.startMoney -= 50;
                                break;
                        }
                        selectedTower = "empty";
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