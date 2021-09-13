// var is a function scope ***
if(true){
    var varVariable = 'This is var';
    var varVariable = 'This is var again';
}

console.log(varVariable); // This is var again

// let is a block scope ***
if(true){
    let letVariable = 'This is let';
    let letVariable = 'This is let again';

    // let variable can't re-define but we can re-assign value


    console.log(letVariable); // let letVariable = 'This is let again';^SyntaxError: Identifier 'letVariable' has already been declared
}

console.log(letVariable); //ReferenceError: letVariable is not defined



// const variable can't re-define and re-assign value
// const is a block scope ***
if(true){
    const constVarible = {
        name: 'JavaScript',
        age: '25 years',
    };
    constVarible.name = 'JS';

    console.log(constVarible) // {name: 'JS',age: '25 years'} <= we can update const variable declared object 
}