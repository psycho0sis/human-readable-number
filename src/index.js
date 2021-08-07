module.exports = function toReadable (number) {

    const lessThanTen = (n) => {
        switch (n) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            default: return '';
        }
    };

    const lessThanTwenty = (n) => {
        switch (n) {
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            default: return '';
        }
    };
    const dozens = (n) => {
        switch (n) {
            case 10: return 'ten';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            case 70: return 'seventy';
            case 80: return 'eighty';
            case 90: return 'ninety';
            default: return '';
        }
    };
    const hundreds = (n) => {
        switch (n) {
            case 100: return 'one hundred';
            case 200: return 'two hundred';
            case 300: return 'three hundred';
            case 400: return 'four hundred';
            case 500: return 'five hundred';
            case 600: return 'six hundred';
            case 700: return 'seven hundred';
            case 800: return 'eight hundred';
            case 900: return 'nine hundred';
            default: return '';
        }
    };


    if (number === 0) return 'zero';
    if (number <= 9)  return lessThanTen(number);
    if (number === 10) return 'ten';
    if (number <= 19) return lessThanTwenty(number);
    if (number < 100) {
        if(number % 10 === 0) {
            return dozens(number);
        } 

    return (dozens(Math.floor(number  / 10) * 10) + ' ' + lessThanTen(number % 10));
    }
    if (number < 1000) {
        if (number % 100 === 0) {
            return hundreds(number);
        } 
        if (number % 100 > 0 && number % 100 <= 9) {
            return (hundreds(Math.floor(number / 100) * 100) + ' ' + lessThanTen(number % 100));
        }
        if (number % 100 >= 10 && number % 100 <= 19) {
            return (hundreds(Math.floor(number / 100) * 100) + ' ' + lessThanTwenty(number % 100));
        }
        if (number % 10 === 0) {
            return (hundreds(Math.floor(number / 100) * 100) + ' ' + dozens(Math.floor(number % 100))); 
        }
        
        return ((hundreds(Math.floor(number / 100) * 100) + ' ' + dozens((Math.floor((number % 100) / 10)) * 10) + ' ' + lessThanTen(number % 10))).trim();
    }
    

}
