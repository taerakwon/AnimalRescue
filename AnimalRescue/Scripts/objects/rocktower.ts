module objects {
    // Firetower class
    export class Rocktower extends Tower {
        constructor(towerName: string) {
            super(towerName);
            this.name = "rocktower";
            this.sound = "rocktower";
            this.cost = 50;
            this.attackSpeed = 1;
            this.health = 100;
            this.damage = 75;
            this.isAvailable = true;
        }
    }
}  