// Iteration 1: Names and Input
// 
let hacker1 = 'Joana';
console.log("The driver's name is", hacker1, ".");

let hacker2 = 'Clara';
console.log("The navigator's name is", hacker2, ".");

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log('The driver has the longest name, it has', hacker1Length, 'characters.')
}
else if (hacker1Length < hacker2Length) {
    console.log('It seems that the navigator has the longest name, it has', hacker2Length, 'characters.')
}
else if (hacker1Length === hacker2Length) {
    console.log('Wow, you both have equally long names,', hacker2Length, 'characters!.')
}

// Iteration 3: Loops

let upperCaseName = hacker1.toUpperCase();
console.log(upperCaseName);

let spacedLetters = ""
for (let i = 0; i < upperCaseName.length; i++) {
    spacedLetters += upperCaseName[i] + " "
}
console.log(spacedLetters)

let backRead = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    backRead += hacker2[i]
}
console.log(backRead);

/*  `The driver's name goes first.` <br>
- `Yo, the navigator goes first definitely.` <br>
- `What?! You both have the same name?`*/
if (hacker1 < hacker2) {
    console.log('The driver\'s name goes first.')
} else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}




