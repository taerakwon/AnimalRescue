module objects {
    // Firetower class
    export class Icetower extends Tower {
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "icetower";
            this.sound = "icetower";
            this.cost = 100;
            this.attackSpeed = 2;
            this.health = 200;
            this.damage = 50;
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var slow = 10;
        }

        destroy() {
            game.removeChild(this);
        }
    }
}  