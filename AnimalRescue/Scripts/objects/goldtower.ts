module objects {
    // Firetower class
    export class Goldtower extends Tower {
        constructor(towerName: string) {
            super(towerName);
            this.name = "goldtower";
            this.sound = "goldtower";
            this.cost = 50;
            this.attackSpeed = 0;
            this.health = 150;
            this.damage = 0;
            this.isAvailable = true;
        }

        update() {
        }

        destroy() {
            game.removeChild(this);
        }

    }
}  