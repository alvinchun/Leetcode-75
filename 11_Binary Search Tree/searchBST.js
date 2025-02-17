var searchBST = function(root, val) {
    if (!root) {
        return null;
    }
    if (root.val === val) {
        return root;
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};

var searchBST = function(root, val) {
    let res = null;
    const helper = (node) => {
        if(!node) return;
        if(node.val === val){
            res = node;
            return;
        }
        if(val < node.val) helper(node.left)
        if(val > node.val) helper(node.right)
    }
    
    helper(root);   
    return res;
};

var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) return root;
    if(val < root.val) return searchBST(root.left, val);
    if(val > root.val) return searchBST(root.right, val);
}

// no need to use stack since "val"  or "null" will be eventually found in the end 
// and we do not need to traverse what we skipped

var searchBST = function(root, val) {
    while(root !== null && root.val !== val){
        root = val < root.val ? root.left : root.right;
    }
    return root;
}