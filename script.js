                    // UYGA VAZIFA

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ea';

let unli = ['a', 'i', 'u', 'o', 'e']
let undosh = []
let unliVaUndosh = [unli, undosh]

for (let i = 0; i < text.length; i++) {
    let letter = text[i].toLowerCase();
    if (unli.includes(letter)) {
        unliVaUndosh[0].push(letter)
    }
    else if (letter>= 'a' && letter <= 'z' ) {
        unliVaUndosh[1].push(letter)
    }
}

console.log(unliVaUndosh);
console.log(text.length);