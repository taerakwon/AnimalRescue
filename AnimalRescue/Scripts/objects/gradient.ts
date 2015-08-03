module objects {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    export class Gradient extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 20;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(assetName: string) {
            super(assetName);
            // Gets Width and Height of Image being inserted
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }

        // PRIVATE METHOD THAT CHECKS BOUNDARY ++++++++++++++++
        private _checkBound(): void {
            // If gradient image reaches the most left side of the canvas, call reset function
            if (this.x == -800) {
                this._reset();
            }
            if (this.x == 0) {
                this._reset();
            }
        }

        // RESET FUNCTION +++++++++++++++++++++++++++++++++++++
        private _reset(): void {
            this.dx = this.dx*-1; // Starts the gradient image off the screen
            this.y = 0;
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; // How much image moves in horizontal
            this._checkBound();
        }

    }
} 