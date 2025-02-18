var leafSimilar = function(root1, root2) {
    const collectLeafValues = (root, leafValues) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            leafValues.push(root.val);
        }
        collectLeafValues(root.left, leafValues);
        collectLeafValues(root.right, leafValues);
    };

    const leafValues1 = [];
    const leafValues2 = [];
    collectLeafValues(root1, leafValues1);
    collectLeafValues(root2, leafValues2);

    return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const dfs = (root) => {
            // If the current node is null, return an empty array
            if (root === null) {
                return [];
            }

            // Recursively explore the left and right children, and accumulate leaf values
            const leaves = dfs(root.left).concat(dfs(root.right));

            // If 'leaves' is empty, it means this is a leaf node, so return its value
            // Otherwise, it means this is an internal node and 'leaves' contains its subtree's leaves
            return leaves.length > 0 ? leaves : [root.val];
        };

        // Compare the leaf value sequences of both trees
        return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
};

class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    leafSimilar(root1, root2) {
        const s1 = this.getSequence(root1);
        const s2 = this.getSequence(root2);
        if (s1.length !== s2.length) {
            return false;
        }
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                return false;
            }
        }
        return true;
    }

    getSequence(root) {
        const result = [];
        this.dfs(root, result);
        return result;
    }

    dfs(root, result) {
        if (root === null) {
            return;
        }
        if (root.left === null && root.right === null) {
            result.push(root.val);
            return;
        }
        this.dfs(root.left, result);
        this.dfs(root.right, result);
    }
}

var leafSimilar = function(root1, root2) {
    const getLeaves = (node) => {
        if (!node) return [];
        if (!node.left && !node.right) return [node.val];
        return [...getLeaves(node.left), ...getLeaves(node.right)];
    };
    
    return getLeaves(root1).toString() === getLeaves(root2).toString();
};
