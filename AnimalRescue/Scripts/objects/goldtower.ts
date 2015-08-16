module objects {
    // Firetower class
    export class Goldtower extends Tower {
        // Constructor
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "goldtower";
            this.cost = 50;
            this.attackSpeed = 0; // This tower does not attack
            this.damage = 0;
            this.isAvailable = true;
            this.x = x;
            this.y = y;
            goldTowerBuilt += 1;
        }
        // Update method
        update() {          
            console.log("goldtower");
            this._generateGold();
        }
        // Generating gold method
        private _generateGold() {
            scoreBoard.startMoney += 0.05;
        }
        //Destroy method
        destroy() {
            game.removeChild(this);
        }
    }
}  