module objects {
    // Firetower class
    export class Icetower extends Tower {
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "icetower";
            this.sound = "icetower";
            this.cost = 100;
            this.attackSpeed = 4;
            this.health = 200;
            this.damage = 50;
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var ice;
            ice = new Missle("ice", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missleArray.push(ice);
        }

        destroy() {
            game.removeChild(this);
        }
    }
}  