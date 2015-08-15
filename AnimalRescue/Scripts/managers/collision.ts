module managers {
    // Collision Manager Class
    export class Collision {
        // Private variables
        private _enemies = [];
        private _missles = [];

        constructor(enemies?, missles?) {
            this._enemies = enemies;
            this._missles = missles;
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
        private _bulletAndEnemy(missle: objects.Missle, enemy: objects.Bowhunter) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = missle.x;
            p1.y = missle.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if ((this._distance(p1, p2)) < ((missle.width * 0.1) + (enemy.width * 0.5))) {
                enemy.health -= missle.damage;
                missle.x = -10000;
                setTimeout(() => missle.reset(), 500);
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var counter = 0; counter < this._enemies.length; counter++) {
                if (this._missles.length > 0) {
                    for (var count = 0; count < this._missles.length; count++) {                        
                        this._bulletAndEnemy(this._missles[count], this._enemies[counter]);                        
                        if (this._enemies[counter].health <= 0) {
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

            /*
            if (this.missles.length > 0) {
                for (var count = 0; count < this.missles.length; count++) {
                    this.bulletAndEnemy(this.missles[count], this.enemies[count]);
                    console.log(this.enemies[count].health);
                    if (this.enemies[count].health <= 0) {
                        this.enemies[count].x = 10000;
                    }
                }
            }
            */


            /*if (missleArray.length > 0) {
                    for (var count = 0; count < missleArray.length; count++) {
                        for (var count = 0; count < bowhunters.length; count++) {
                            this.bulletAndEnemy(this.missles[0], this.enemies[count]);
                        }
                }
            }
            */
        }
    }
} 