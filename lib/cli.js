const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { join } = require('path');
const { createLogo } = require('./logo');
const { writeFileSync } = require('fs');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

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
                let logoHTML = createLogo(this.text, this.textColor, this.shape, this.shapeColor);
                return logoHTML
            })
            .then((data) => {
                writeFileSync(join(__dirname, '..', 'output', 'newLogo.svg'), data);
            })
            .then(() => console.log('Generated newLogo.svg!'))
            .catch((err) => {
                console.log('ERROR', err);
                console.log('Something went wrong, make sure you entered a valid color name or hexadecimal code.');
            })
    }
}

module.exports = CLI;