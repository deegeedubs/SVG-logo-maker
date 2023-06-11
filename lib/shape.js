class Shape {
    constructor (shape, shapeColor){
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render(){
            throw new Error('Shape cannot be rendered.')
    }
}

module.exports = Shape;