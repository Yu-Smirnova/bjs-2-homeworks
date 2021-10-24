function parseCount(value) {
    const result = Number.parseInt(value);
    if (Number.isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(err) {
        return err;
    }
}

class Triangle{
    constructor(a, b, c){
        if (a + b <= c || b + c <= a || c + a <= b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
} 

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {getArea: () => {return 'Ошибка! Треугольник не существует'}, getPerimeter: ()=> {return 'Ошибка! Треугольник не существует'}}
    }
}