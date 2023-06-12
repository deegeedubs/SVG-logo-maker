const Shape = require('./shape');

class Triangle extends Shape {
    constructor (shapeColor){
        super(shapeColor);
    }
    render(shapeColor){
        let triangleRender = `<polygon points="10,50 150,200 290,50" style="fill:${shapeColor};stroke:purple;stroke-width:1" />`
        return triangleRender;
    }
}

module.exports = Triangle;