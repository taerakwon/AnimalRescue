module objects {
    // Firetower class    
    var x;
    var y;
    export class Rocktower extends Tower {
        constructor(towerName: string, x: number, y: number) {
            super(towerName);
            this.name = "rocktower";
            this.sound = "rocktower";
            this.cost = 50;
            this.health = 100;
            this.damage = 75;
            this.attackSpeed = 8;
            this.isAvailable = true;    
            
            rock = new objects.Rock;
            this.x = x;
            this.y = y;
            rock.x = this.x+40;
            rock.y = this.y+20;
            rock.dx = this.attackSpeed;
        }

        destroy() {
            game.removeChild(this);
        }

        update() {
            rock.update();
            if (rock.x > 500) {
                this.reset();                
            }
        }

        reset() {
            rock.x = this.x+20;
            rock.y = this.y+40;
        }

    }
}  