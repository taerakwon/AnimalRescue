module objects {
    export class GameObject extends createjs.Sprite {
        width: number;
        height: number;
        constructor(SpriteName: string) {
            super(managers.Assets.atlas, SpriteName);
            this.width = this.getBounds().width;
        }
    }
} 