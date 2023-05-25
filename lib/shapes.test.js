const 
{Triangle, Circle, Square} = require('./shapes');


describe('Triangle test'), ()=>{
    test('test for shape background', ()=>{
        const shape = new Triangle();
        shape.setColor('blue');
        expect (shape.render()).toEqual(
            ` <polygon points="150, 18 244, 182 56, 182" fill = "blue"  /> `
        );
    });
};

describe('Circle test'), ()=>{
    test('test for shape background', ()=>{
        const shape = new Circle();
        shape.setColor('green');
        expect (shape.render()).toEqual(
            ` <polygon points="150, 18 244, 182 56, 182" fill = "<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill = "green" /> "  /> `
        );
    });
};

describe('Square test'), ()=>{
    test('test for shape background', ()=>{
        const shape = new Square();
        shape.setColor('red');
        expect (shape.render()).toEqual(
            `<rect x="50" y="20" width="150" height="150" fill = "red" />`
        );
    });
};











