class Vector {

    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    clone(){
        return new Vector(
            this.x,
            this.y
        )
    }

    set(other: Vector) {
        this.x = other.x
        this.y = other.y
        return this;
    }

    scale(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    add(other: Vector){
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    sub(other: Vector){
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    div(other: Vector){
        this.x /= other.x,
        this.y /= other.y
        return this;
    }

    magnitude(){
        return Math.sqrt(
            Math.pow(this.x,2)+
            Math.pow(this.y,2)
        );
    }

    normalise(){
        let mag = this.magnitude(); 
        this.x = this.x / mag;
        this.y = this.y / mag;
        return this;
    } 
}

export default Vector;