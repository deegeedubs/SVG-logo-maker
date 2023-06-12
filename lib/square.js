const Shape = require('./shape');

class Square extends Shape {
    constructor (shapeColor){
        super(shapeColor);
    }
    render(shapeColor){
        let squareRender = `<rect x="75" y="25" width="150" height="150" style="fill:${shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />`
        return squareRender;
    }
}

module.exports = Square;