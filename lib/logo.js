const Shape = require('./shape');
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

function createLogo (text, textColor, shape, shapeColor){
    console.log('Creating Logo...');

    let shapeRender = '';
    if (shape === 'Circle'){
        let newShape = new Circle();
        shapeRender = newShape.render(shapeColor);
    } else if (shape === 'Square'){
        let newShape = new Square();
        shapeRender = newShape.render(shapeColor);
    } else if (shape === 'Triangle'){
        let newShape = new Triangle();
        shapeRender = newShape.render(shapeColor);
    } else {
        let newShape = new Shape();
        shapeRender = newShape.render(shapeColor);
        return shapeRender;
    }


    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeRender}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`
}

module.exports = { createLogo };