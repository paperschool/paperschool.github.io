import Vector from "./Vector";
import P5 from "p5";
import { distance, random, randomBool, randomInt, range } from "./Utility";

class Line {

    public a: Vector;
    public b: Vector;

    public speed: number = 1;
    
    private child: Line;
    private childAnchor: Vector;
    private childOffset: number; // percentage distance of a->b

    private shade: number = 255;

    constructor(a: Vector, b: Vector) {
        this.a = a || new Vector(0,0);
        this.b = b || new Vector(0,0);
    }

    createChild(bound: Vector, a?: Vector){
        if(this.child){
            this.child.createChild(bound);
        } else {
            this.childAnchor = this.randomPointOnLine();
            this.childOffset = this.getPointOffset(this.childAnchor);
            this.child = new Line(this.childAnchor,new Vector(
                randomInt(0,bound.x),
                randomInt(0,bound.y)
            ));
        }
        return this.child
    }

    setA(a: Vector){
        this.a.set(a);
    }

    setB(b: Vector){
        this.b.set(b);
    }

    distance(){
        return distance(this.a,this.b);
    }

    getPointOffset(otherPoint: Vector){
        let acDistance = distance(this.a,otherPoint)*-1;
        let abDistance = distance(this.a,this.b);
        return (1.0 / abDistance) * acDistance;
    }

    randomChildAnchor(){
        this.childAnchor = this.randomPointOnLine();
        this.childOffset = this.getPointOffset(this.childAnchor);
    }

    randomPointOnLine(){
        let abDistance = distance(this.a,this.b)*-1;
        let u = this.a.clone().sub(this.b).normalise().scale(random(0,abDistance))
        return this.a.clone().add(u);
    }

    movePointOnLine(rawOffset: number = 0, otherPoint: Vector){
        let u = this.a.clone().sub(this.b).normalise().scale(rawOffset);
        return otherPoint.clone().add(u);
    }

    update(bounds?: Line, shouldMove?: boolean){

        if(bounds){
            
            if(randomInt(0,200) === 1){
                bounds.randomChildAnchor();
                this.a.set(bounds.childAnchor)
            }

            if(randomInt(0,400) === 1){
                shouldMove = true
            }

        } else {
            // only applies to head line
            this.childOffset = this.getPointOffset(this.childAnchor);
            this.a.x += this.speed * random(-1,1);  
            this.a.y += this.speed * random(-1,1);
        }

        this.b.x += this.speed * random(-1,1); 
        this.b.y += this.speed * random(-1,1);
        
        this.childAnchor = this.movePointOnLine(this.distance() * this.childOffset, this.a);

        if(this.child){
            this.child.a.set(this.childAnchor);
            this.child.update(this, shouldMove);
        }

        this.shade += range(0,255,random(-10,10));
    }

    draw(p5: P5){
        if(this.child){
            this.child.draw(p5)
        }

        p5.stroke(this.shade);
        p5.line(this.a.x,this.a.y,this.b.x,this.b.y);
    }
}

export default Line;