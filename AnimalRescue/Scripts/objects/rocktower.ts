module objects {
    // Rocktower class    
    export class Rocktower extends Tower {
        // Constructor
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "rocktower";
            this.cost = 50; // Cost of rock tower
            this.damage = 50; // Damage
            this.attackSpeed = 2; // Attack speed of rock tower
            this.isAvailable = true;
            this.x = x;
            this.y = y;
            towerBuilt += 1;
            var rock;
            rock = new Missile("rock", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missileArray.push(rock); // Pushing into missleArray
        }
        // Destroy method
        destroy() {
            game.removeChild(this);
        }
        // Update method
        update() {
        }
    }
}  