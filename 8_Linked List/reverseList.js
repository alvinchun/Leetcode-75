class Solution {
    reverseList(head) {
        // Initialize pointers
        let prev = null; // Previous node starts as null
        let curr = head; // Current node starts at the head

        // Traverse the list
        while (curr !== null) {
            let next = curr.next; // Save the next node
            
            curr.next = prev; // Reverse the link
            
            // Move pointers forward
            prev = curr; // Move prev to the current node
            curr = next; // Move curr to the next node
        }

        // prev is now the new head of the reversed list
        return prev;
    }
}

var reverseList = function(head) {
    // Special case...
    if (head == null || head.next == null) return head;
    // Create a new node to call the function recursively and we get the reverse linked list...
    var res = reverseList(head.next);
    // Set head node as head.next.next...
    head.next.next = head;
    //set head's next to be null...
    head.next = null;
    return res;     // Return the reverse linked list...
};

class Solution {
    reverseList(head) {
        let prev = null, curr = head;
        while (curr) [curr.next, prev, curr] = [prev, curr, curr.next];
        return prev;
    }
}
