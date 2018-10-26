//Input fields
const hexInput = document.querySelector('.hex-input');
const rgbInput = document.querySelector('.rgb-input');

//Array index for color hex codes
const index = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

//Key press keyCodes array
const keyCodes = ['48','49','50','51','52','53','54','55','56','57','65','66','67','68','69','70'];

 let hexCode = [];
 
//keydown event fired on every keyed button
hexInput.addEventListener('keydown', converter);


/**
* hex to array conversion
* @param {String} hex Hex of a color 
*
*/

function hexConversion(hex) {
    
   
    if (typeof hex === 'undefined')
        {
            return false;
        }
    
    //split hex into an string array
    let hexArr = hex.split("");
    
    let newHexArr = [];
    
    for(let i=0; i<hexArr.length; i++) {
        
        //let xter = hexArr[i].toUpperCase();
        
        //match each hex character with the index array above go validate keyed ones
        let hexIndex = inArray(hexArr[i].toUpperCase(), index);
        
        //check for true and number zero as some hex have zero in them
        if (hexIndex || hexIndex === 0) {
            newHexArr.push(hexIndex);
        
        }     
        
    }

    let rgbColorCode = makeRGB(newHexArr); 
    
    return rgbColorCode;
}

/**
* Returns the index of an array value if found matching a specified value
* @param {String} needle The matching character to compare
* @param {Array} stack The array to find character in
* @return {Number} The index of the matching character in the array
*/
    
function inArray(needle, stack) {
    if (typeof stack === 'undefined' || typeof needle === 'undefined') {
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

/**
* make RGB value out of the hex index array
* @param {Array} rgb An array of hex index
* @return {String} rgbVal Converted RGB value 
*/
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
    
    return rgbArray.toString();
    
}

 
function converter(e) {
    let rgbColor = [];
    rgbInput.value = '';
    const backspace = 8;
    
    let inputKeyCode = inArray(e.keyCode, keyCodes);
    
    if (inputKeyCode || inputKeyCode === 0) {
        hexCode.push(e.key);
        let colorCode = hexCode.join('');
        document.body.style.backgroundColor = `#${colorCode}`;
        
        if(colorCode.length === 6) {
            rgbColor = hexConversion(colorCode);
            rgbInput.value = '(' + rgbColor +')';            
        }
        
        if(colorCode.length > 6) {
            return false;
        }
    }
    
    if (e.keyCode == backspace) {
        hexCode.pop();
        rgbInput.value = '';
    }

    
}
