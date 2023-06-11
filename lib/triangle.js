const Shape = require('./shape');

class Triangle extends Shape {
    constructor (shapeColor){
        super(shapeColor);
    }
    render(shapeColor){
        let triangleRender = `<polygon points="150,10 25,190 275,190" style="fill:${shapeColor};stroke:purple;stroke-width:1" />`
        return triangleRender;
    }
}

module.exports = Triangle;