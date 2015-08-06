module objects {
    // Firetower class
    export class Icetower extends Tower {
        constructor(towerName: string) {
            super(towerName);
            this.name = "icetower";
            this.sound = "icetower";
            this.cost = 100;
            this.attackSpeed = 2;
            this.health = 200;
            this.damage = 50;
            this.isAvailable = true;
            var slow = 10;
        }
    }
}  