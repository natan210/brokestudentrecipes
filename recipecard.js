

//so far, I've been able ot get basic functionality of the recipe card written down, but I'm completely unsure on how to 
//1. Make it work with other people's code, namely with ingridients
//2. make it work with react, everythign I've written is base javascript
//3. how to pass parameters into an object in javascript. 

const recipe = {
    ingridients: new Array(),
    name: "test",
    image : "test.jpg",
    instruction : new Array()
    
}


/*
this function adds ingridients to the recipe. Still need to make sure it's compatible with how ingridients are placed. 
*/
function addIngridient(x) {
    // if x is ingridient, then add ingridient
    recipe.ingridients.push(x);
}


/*
self explanatory, not sure how to format it on a website though with react
*/
function listIngridients() {
    for (let i = 0; i < recipe.ingridients.length; i++) {
        console.log(recipe.ingridients[i]) //this would probably be ingridients.name, depending on how it works
    }

}

function displayImage() {
    //don't know how to display a image on an app
}

function addinstruction(i, x) {
    recipe.instruction.splice(x, 0, i);

}

function addIngridintsend(i) {
    recipe.instruction.push(i);
}


function removeInstruction(i) {
    recipe.instruction.splice(i, 1);

}
function removeIngridient(i) {
    recipe.ingridients.splice(i, 1);
}

function changeName(i) {
    recipe.name = i;
}






