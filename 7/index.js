/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    let newStr = '';
    
    for(const letter in str) {
        if(letter % 2 === 0) {
            newStr += str[letter].toUpperCase()

        } else {
            newStr += str[letter].toLowerCase();   
        }
    }
    
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
