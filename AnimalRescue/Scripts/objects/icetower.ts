module objects {
    // Ice tower class
    export class Icetower extends Tower {
        // Constructor
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "icetower";
            this.cost = 100; // Tower cost
            this.attackSpeed = 3; // Tower attack speed
            this.damage = 100; // Tower damage
            this.x = x;
            this.y = y;
            this.isAvailable = true;
            var ice;
            ice = new Missile("ice", this.x + 40, this.y + 40, this.attackSpeed, this.damage);
            missileArray.push(ice); // Pushing into missleArray
        }

        // Destroy Method
        destroy() {
            game.removeChild(this);
        }
    }
}  