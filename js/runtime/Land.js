import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land');
        super(image, 0, 0,
            image.width, image.height,
            0, DataStore.getInstance().canvas.height - image.height,
            image.width, image.height);
        // 陆地的水平位移量
        this.offsetX = 0;
    }

    draw() {
        this.offsetX += this.offsetSpeed;
        if (this.offsetX >= (this.img.width - DataStore.getInstance().canvas.width)) {
            this.offsetX = 0;
        }
        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.offsetX,
            this.y,
            this.width,
            this.height);
    }
}