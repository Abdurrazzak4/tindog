// Create the Dog class here

import { dogs } from "./data.js"
import Dog from "./Dog.js"

function render(){
    const dog = new Dog(dogs[0])
    const dogHtml = dog.getDogHtml()
    document.querySelector("#body").innerHTML = dogHtml
}