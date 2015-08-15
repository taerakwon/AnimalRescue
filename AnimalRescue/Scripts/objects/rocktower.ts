module objects {
    // Rocktower class    
    export class Rocktower extends Tower {
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "rocktower";
            this.sound = "rocktower";
            this.cost = 50;
            this.health = 100;
            this.damage = 25;
            this.attackSpeed = 5;
            this.isAvailable = true;
            this.x = x;
            this.y = y;
            towerBuilt += 1;
            var rock;
            rock = new Missle("rock", this.x + 40, this.y + 40, this.attackSpeed);
            missleArray.push(rock);
        }

        destroy() {
            game.removeChild(this);
        }

        update() {
        }
    }
}  