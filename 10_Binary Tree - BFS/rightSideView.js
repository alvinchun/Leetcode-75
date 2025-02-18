var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    pre(root, 0);
    return res;
    
    function pre(node, h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);
    }
};

var rightSideView = function(root) {
    const result = [];
    const queue = [];
    
    if (root === null) return result;
    
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let n = queue.shift();
            if (i === size - 1) result.push(n.val);
            if (n.left !== null) queue.push(n.left);
            if (n.right !== null) queue.push(n.right);
        }
    }
    
    return result;
};

var rightSideView = function(root) {
    if (!root) return [];
    
    const result = [], queue = [root];

    while (queue.length) {
        let size = queue.length;
        result.push(queue[size - 1].val); // Add the rightmost node at each level

        while (size--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
};
