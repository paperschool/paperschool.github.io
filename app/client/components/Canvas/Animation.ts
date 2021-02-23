import { randomInt, random } from "./Utility";
import Vector from "./Vector";
import Lines from "./Lines";

export class Animation {

    private size: Vector
    private pos: Vector
    private lines: Lines;

    constructor() {
        this.size = this.getCanvasSize();
        this.lines = new Lines();   
    }

    getCanvasSize() {
        return new Vector(
            window.innerWidth,
            window.innerHeight,
        )
    }

    resize(p5: any) {
        const { x, y } = this.getCanvasSize()
        this.size = this.getCanvasSize();

        p5.resizeCanvas(x, y);
    }

    setup(p5: any, canvasParentRef: any) {
        const { x, y } = this.getCanvasSize()
        
        p5.createCanvas(x, y).parent(canvasParentRef);

        new Array(40).fill(0).map(() => {
            this.lines.addLine(this.getCanvasSize());
        })
    }

    draw(p5: any) {
        p5.background(10, 10, 10, 50);
        this.lines.update();
        this.lines.draw(p5);
    }

}
