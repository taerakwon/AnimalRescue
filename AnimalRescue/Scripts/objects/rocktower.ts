module objects {
    // Rocktower class    
    export class Rocktower extends Tower {
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "rocktower";
            this.sound = "rocktower";
            this.cost = 50;
            this.health = 100;
            this.damage = 50;
            this.attackSpeed = 2;
            this.isAvailable = true;
            this.x = x;
            this.y = y;
            towerBuilt += 1;
            var rock;
            rock = new Missle("rock", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missleArray.push(rock);
        }

        destroy() {
            game.removeChild(this);
        }

        update() {
        }
    }
}  