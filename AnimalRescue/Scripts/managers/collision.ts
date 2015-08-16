module managers {
    // Collision Manager Class
    export class Collision {
        // Private variables
        private _enemies = [];
        private _missiles = [];
        private beBack = createjs.Sound;

        // Constructor passing unknown enemies and missles array
        constructor(enemies?, missiles?) {
            this._enemies = enemies;
            this._missiles = missiles;
        }

        // Utility method - Distance calculation between two points
        private _distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            //result = Math.sqrt(xPoints + yPoints);
            result = Math.sqrt(xPoints + yPoints);
            return result;
        }

        // check collision between bullet and any enemy object
        private _bulletAndEnemy(missile: objects.Missile, enemy: objects.Bowhunter) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = missile.x;
            p1.y = missile.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if ((this._distance(p1, p2)) < ((missile.width * 0.1) + (enemy.width * 0.5))) {
                enemy.health -= missile.damage;
                missile.x = -10000;
                setTimeout(() => missile.reset(), 1000);
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var counter = 0; counter < this._enemies.length; counter++) {
                if (this._missiles.length > 0) {
                    // Counting less than the number of missles array
                    for (var count = 0; count < this._missiles.length; count++) {                        
                        this._bulletAndEnemy(this._missiles[count], this._enemies[counter]);                        
                        if (this._enemies[counter].health <= 0) {
                            this.beBack.play("beback"); // Play I'll be back
                            this._enemies[counter].dead = true;
                            if (this._enemies[counter].dead == true) {                                
                                this._enemies[counter].health = 300; // Resets health so that above if statement does not execute
                                scoreBoard.score += 1; // Adds one score when enemy is dead
                                this._enemies[counter].x = 10000; // Push hunter off the map so user cannot see
                                this._enemies[counter].dead = false; // So score only adds once
                            }
                        }
                    }
                }
            }
        }
    }
} 