class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this._a = a;
        this._b = b;
        this._c = c;
    }

    get perimeter() {
        return this._a + this._b + this._c;
    }

    get area() {
        const s = this.perimeter / 2;
        return +(Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c))).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return Object.freeze({
            get perimeter() { return "Ошибка! Треугольник не существует"; },
            get area() { return "Ошибка! Треугольник не существует"; }
        });
    }
}

console.log(getTriangle(3, 4, 5).perimeter);
console.log(getTriangle(3, 4, 5).area);
console.log(getTriangle(1, 1, 3).perimeter); 