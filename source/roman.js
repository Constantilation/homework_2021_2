'use strict'

/**
 * Converting arabic number into roman number
 *
 * @param {int} arabicNumber number from arabic numbers that need to be converted into roman number
 * @returns {string} roman number or string with error, if number is more than 3999
 * or less than 1
 */

const toRoman = (arabicNumber) => {
    let roman = '';
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    if(arabicNumber < 1 || arabicNumber > 3999) {
        return 'Enter a number between 1 and 3999';
    }

    Object.entries(romanNumList).forEach(([key, value]) => {
            let largest = Math.floor(arabicNumber / value);
            if(largest >= 0) {
                for(let i = 0; i < largest; i++) {
                    roman += key;
                }
            }
            arabicNumber = arabicNumber % value;
        })

    return roman;
}

/**
 * Converting roman number into arabic number
 *
 * @param {string} romanNumber number from arabic numbers that need to be converted into roman number
 * @returns {int} roman number or 0, if number is more than 3999
 * or less than 1
 */

const toArab = (romanNumber) => {
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


/**
 * Converting roman number into arabic number
 *
 * @param {int | string} value int roman number or string arabic number need to be converted
 * @returns {int | string} roman number, if value is arabic number. Arabic number, if value is
 * roman number. Empty string if value is incorrect
 */

const roman = (value) => {
    if (typeof value != 'number' && typeof value != 'string') {
        return '';
    }

    if (Number.isInteger(parseInt(value))) {
        return toRoman(parseInt(value));
    }
        return toArab(value);
}