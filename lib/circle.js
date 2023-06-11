const Shape = require('./shape');

class Circle extends Shape {
    constructor (shapeColor){
        super(shapeColor);
    }
    render(shapeColor){
        let circleRender = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
        return circleRender;
    }
}

module.exports = Circle;