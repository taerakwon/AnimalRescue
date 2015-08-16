module objects {
    // Firetower class
    export class Firetower extends Tower {
        // Constructor
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "firetower";
            this.cost = 150; // Cost of fire tower
            this.attackSpeed = 4; // Attack speed
            this.damage = 130; // Damage
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var fire;
            fire = new Missile("fire", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missileArray.push(fire); // Pushing into missleArray
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