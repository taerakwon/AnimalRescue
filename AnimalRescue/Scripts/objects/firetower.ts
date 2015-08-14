module objects {
    // Firetower class
    export class Firetower extends Tower {
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "firetower";
            this.sound = "firetower";
            this.cost = 150;
            this.attackSpeed = 1;
            this.health = 300;
            this.damage = 100;
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var burnDamage = 25;
            var fire;
            fire = new Missle("fire", this.x + 40, this.y + 40, this.attackSpeed);
            missleArray.push(fire);
        }

        destroy() {
            game.removeChild(this);
        }

        update() {
        }
    }
} 