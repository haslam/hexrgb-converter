/**
* hex to array conversion
* @param {String} hex Hex of a color
* @returns {Array} 
*
*/
const index = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
function hexConversion(hex) {
    
   
    if (typeof hex === 'undefined')
        {
            return false;
        }
    
    let hexArr = hex.split("");
    
    let newArr = [];
    
    for(let i=0; i<hexArr.length; i++) {
        let xter = hexArr[i].toUpperCase();
        let hexIndex = inArray(xter, index);
        
        if (hexIndex) {
            newArr.push(hexIndex);
        }
        
    }
    
    makeRGB(newArr);
   
}

//returns the index of an array value if found matching a specified value
function inArray(needle, stack) {
    if (typeof stack === 'undefined') {
        return false;
    }
    let stackLen = stack.length;
    for (let i=0; i < stackLen; i++) {
          if (stack[i] == needle) {
            let stackIndex = i;
            return stackIndex;
        }
    }
    return false;
}

function makeRGB(rgb) {
    if (typeof rgb === 'undefined') { return false; }
    //get the 2 left digits of the hex value for red
    const R = rgb.splice(0, 2);
    //get the 2 middle digits of the hex value for green
    const G = rgb.splice(0, 2);
    //get the 2 right digits of the hex value for blue
    const B = rgb.splice(0, 2);
    
    const RGB = [R, G, B];
    let rgbArray = [];
    
    for (let i=0; i<RGB.length; i++) {
        //get the first of the 2 val
        const xval = RGB[i][0];
        //get the other of the 2 val
        const yval = RGB[i][1];
        
        let rgbConvert = (xval * 16) + yval;
        
        rgbArray.push(rgbConvert);
    }
    
     console.log(rgbArray);
}

const white = "ffffff";
hexConversion(white);
