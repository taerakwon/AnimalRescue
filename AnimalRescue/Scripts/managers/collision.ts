module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // CHECKS THE DISTANCE BETWEEN JETPLANE AND OTHER OBJECTS
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = bowhunter.x;
            p1.y = bowhunter.y;

            p2.x = missle.x;
            p2.y = missle.y;

            if (utility.distance(p1, p2) < ((bowhunter.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "missle") {
                        scoreBoard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }


    }
}  