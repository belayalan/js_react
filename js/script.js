"use strict";

if (4 == 9){
    console.log('OK');
} else {
 console.log('error');
}

const num = 50;

// if (num<49){
//     console.log('error');
// } else if (num>100) {
//     console.log('many');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50: 
        console.log('ok');
        break;
    default: 
        console.log('эх');
        break;
}