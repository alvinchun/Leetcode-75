const largestAltitude = gain => {    
    let previous = 0;
    let biggest = 0;
    
    for (let i = 0; i < gain.length; i += 1) {
        previous += gain[i];
        if (previous > biggest) biggest = previous;
    }
    
    return biggest;
};


const largestAltitude1 = gain => {
	const altitudes = [0];

	for (let i = 0; i < gain.length; i++) {
		altitudes.push(altitudes[i] + gain[i]);
	}

	return Math.max(...altitudes);
};

const largestAltitude2 = gain => {
	return Math.max(
		...gain.reduce((acc, cv, i) => (acc.push(cv + acc[i]), acc), [0])
	);
};

const largestAltitude3 = gain => {
	let [max, currentAltitude] = [0, 0];

	for (let i = 0; i < gain.length; i++) {
		currentAltitude = gain[i] + currentAltitude;
		if (currentAltitude > max) max = currentAltitude;
	}

	return max;
};