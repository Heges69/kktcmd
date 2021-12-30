require('colors');

module.exports = class Logger{
    constructor(component){
        this.component = component;
    }

    log(msg){
        console.log(`[${this.component}] => ${msg}`)
    }

    error(msg){
        console.log(`[${this.component}] => ${msg}`.red);
    }
}