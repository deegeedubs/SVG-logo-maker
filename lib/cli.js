const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./logo');
const { write, writeFileSync } = require('fs');

class CLI {
    constructor() {
        this.shape = '';
        this.text = '';
        this.textColor = '';
        this.shapeColor = '';
    }

    run(){
        console.log('Answer the following prompts to create your new logo:');
        return inquirer
            .prompt([
                {
                    type: 'maxlength-input',
                    name: 'text',
                    message: 'Enter logo text',
                    maxLength: 3
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color should this text be?'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape:',
                    choices: ['Circle', 'Square', 'Triangle']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color should this shape be?'
                }
            ])
            .then(({ text, textColor, shape, shapeColor }) => {
                this.text = text;
                this.textColor = textColor;
                this.shape = shape;
                this.shapeColor = shapeColor;
            })
            .then(() => {
                return createLogo(this.text, this.textColor, this.shape, this.shapeColor);
            })
            .then((data) => {
                writeFile(join(__dirname, '..', 'output', 'newLogo.svg'), data);
            })
            .catch((err) => {
                console.log('ERROR', err);
                console.log('Something went wrong, make sure you entered a valid color name or hexadecimal code.');
            })
    }
}

module.exports = CLI;