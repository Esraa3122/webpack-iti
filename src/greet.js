import {isValid, x} from './validations.js';

export function greet (name = "world"){ 
    console.log(x);
    if (isValid(true)) console.log(`Hellow, ${name}`);
    else console.log("ERROR")
}