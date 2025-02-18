var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        const left = i === 0 || flowerbed[i - 1] === 0;
        const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
        
        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;   
};


var canPlaceFlowers = function (flowerbed, n) {
    let len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        let left = i === 0 || flowerbed[i - 1] === 0;
        let right = i === len - 1 || flowerbed[i + 1] === 0;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        if (flowerbed[i] === 0 && 
            (i === 0 || flowerbed[i - 1] === 0) && 
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            n--;
            i++; // Skip next position to prevent adjacent planting
        }
    }
    return n <= 0;
};
