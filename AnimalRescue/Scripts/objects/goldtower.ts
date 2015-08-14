module objects {
    // Firetower class
    export class Goldtower extends Tower {

        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "goldtower";
            this.sound = "goldtower";
            this.cost = 50;
            this.attackSpeed = 0;
            this.health = 150;
            this.damage = 0;
            this.isAvailable = true;
            this.x = x;
            this.y = y;
            goldTowerBuilt += 1;
        }

        update() {          
            console.log("goldtower");
            this._generateGold();
        }

        private _generateGold() {
            scoreBoard.startMoney += 0.02;
        }

        destroy() {
            game.removeChild(this);
        }
    }
}  