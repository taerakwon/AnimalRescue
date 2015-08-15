module managers {
    // Collision Manager Class
    export class Collision {
        // Private variables
        private enemies = [];
        private missles = [];

        constructor(enemies?, missles?) {
            this.enemies = enemies;
            this.missles = missles;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
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
        private bulletAndEnemy(missle: objects.Missle, enemy: objects.Bowhunter) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = missle.x;
            p1.y = missle.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if ((this.distance(p1, p2))< ((missle.width * 0.1) + (enemy.width * 0.5))) {
                scoreBoard.score += 50;
                enemy.health -= missle.damage;
                missle.reset();                
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var counter = 0; counter < this.enemies.length; counter++) {
                if (this.missles.length > 0) {
                    for (var count = 0; count < this.missles.length; count++) {                        
                        this.bulletAndEnemy(this.missles[count], this.enemies[counter]);                        
                        if (this.enemies[counter].health <= 0) {
                            this.enemies[counter].x = 10000;
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