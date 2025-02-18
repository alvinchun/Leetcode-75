//Greatest Common Divisor of Strings

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (len1, len2) => {
        while (len2 !== 0) {
            [len1, len2] = [len2, len1 % len2];
        }
        return len1;
    };

    return str1.slice(0, gcd(str1.length, str2.length));    
};

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (len1, len2) => {
        const minVal = Math.min(len1, len2);
        for (let i = minVal; i > 0; i--) {
            if (len1 % i === 0 && len2 % i === 0) {
                return i;
            }
        }
        return 1;
    };

    return str1.slice(0, gcd(str1.length, str2.length));    
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    if (str1 + str2 !== str2 + str1) {

        return "";
    }

    let n = str1.length;

    let k = str2.length;

    let gcds = function (x, y) {
        
        if (!y) {
            return x;
        }
        return gcds(y, x % y);
    }

    let div = gcds (n, k);

    return str1.slice(0, div);
};

