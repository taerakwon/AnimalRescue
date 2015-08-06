module objects {
    // Firetower class
    export class Firetower extends Tower {
        constructor(towerName: string) {
            super(towerName);
            this.name = "firetower";
            this.sound = "firetower";
            this.cost = 150;
            this.attackSpeed = 1;
            this.health = 300;
            this.damage = 100;
            this.isAvailable = true;
            var burnDamage = 25;
        }
    }
} 