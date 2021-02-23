type _Vector = {
    x: number;
    y: number;
}

export const randomBool = () => random(0,1) > 0.5;

export const random = (min: number = 0, max: number = 1): number => {
    return (Math.random() * (max - min)) + min;
}

export const randomInt = (min: number = 0, max: number = 1): number => {
    return Math.round(random(min, max))
}

export const gradient = (a: _Vector,b: _Vector) => {
    return (b.y-a.y)/(b.x-a.x)
}

export const distance = (a: _Vector, b: _Vector) => {
    return Math.abs(Math.sqrt(Math.pow(b.x-a.x,2) + Math.pow(b.y-a.y,2)));
}

export const range = (min: number, max: number, value: number) => {
    return value < min 
        ? min
        : value > max 
            ? max
            : value
}
