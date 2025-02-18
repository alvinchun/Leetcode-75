/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    // Iterate over each character in the input string
    for (const c of s) {
        // If the current character is a star and the stack is not empty, pop the topmost character
        // from the stack
        if (c === '*' && stack.length) {
            stack.pop();
        }
        // Otherwise, push the current character onto the stack
        else {
            stack.push(c);
        }
    }

    // Convert the stack to a string and return it as the output
    return stack.join('');
};

var removeStars = function(s) {
    let stack = [];
    for (let c of s) c === '*' ? stack.pop() : stack.push(c);
    return stack.join('');
};
