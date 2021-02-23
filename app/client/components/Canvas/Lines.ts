import Vector from "./Vector";
import P5 from "p5";
import Line from "./Line";
import { randomInt } from "./Utility";

class Lines {

    public lines: Line[];

    constructor() {
        this.lines = [];
    }

    addLine(bounds: Vector){
        if(this.lines.length > 0){
            const parent = this.lines[this.lines.length-1];
            this.lines.push(parent.createChild(bounds));
        } else {
            const newChild = new Line(
                new Vector(
                    randomInt(0,bounds.x),
                    randomInt(0,bounds.y)
                ),
                new Vector(
                    randomInt(0,bounds.x),
                    randomInt(0,bounds.y)
                )                
            )
            this.lines.push(newChild);
        }
    }

    update(){
        this.lines[0].update();
    }

    draw(p5: P5){
        this.lines[0].draw(p5);
    }
}

export default Lines;