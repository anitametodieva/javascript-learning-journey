class Textbox {
    _value;
    _elements;
    _invalidSymbols;

    constructor(selector, regex){
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        this._addListener();
    }

    _addListener(){
        Array.from(this.elements).forEach(input => {
            input.addEventListener("input", ()=> this.value = input.value);
        })
    }

    get value(){
        return this._value;
    }

    set value(value){
        this._value = value;
        Array.from(this.elements).forEach(input => input.value = this.value);
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        return Array.from(this.elements).every(input => !this._invalidSymbols.test(input.value));
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
