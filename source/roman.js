'use strict'

let toRoman = (number) => {
    let roman = '';
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    if(number < 1 || number > 3999) {
        return 'Enter a number between 1 and 3999';
    }

    Object.entries(romanNumList).forEach(([key, value]) => {
            let largest = Math.floor(number / value);
            if(largest >= 0) {
                for(let i = 0; i < largest; i++) {
                    roman += key;
                }
            }
            number = number % value;
        })

    return roman;
}

let toArab = (romanNumber) => {
    romanNumber = romanNumber.toUpperCase();
    const romanNumList = ['CM','M','CD','D','XC','C','XL','L','IX','X','IV','V','I'];
    const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
    let index =  0, num = 0;
    romanNumList.forEach((value, key) => {
            index = romanNumber.indexOf(value);
            while(index !== -1) {
                num += parseInt(corresp[key]);
                romanNumber = romanNumber.replace(value,'-');
                index = romanNumber.indexOf(value);
            }
    })
    return num;
}

let roman = (value) => {
    if (typeof value != 'number' && typeof value != 'string') {
        return '';
    }

    if (Number.isInteger(parseInt(value))) {
        return toRoman(parseInt(value));
    }
        return toArab(value);
}