var RecentCounter = function() {
    this.stream = []
};
RecentCounter.prototype.ping = function(t) {
    this.stream.push(t) // Everytime we recieve a ping, add the time to the stream of integers
  /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
    while(this.stream[0] < t - 3000){ 
      this.stream.shift()
  } 
    // When the loop ends the length of calls will be the length of the array
    return this.stream.length
};

var RecentCounter = function () {
    this.q = [];
};

RecentCounter.prototype.ping = function (t) {
    this.q.push(t);
    while (this.q[0] < t - 3000) {
        this.q.shift();
    }
    return this.q.length;
};

class RecentCounter {
    constructor() {
        this.queue = [];
    }

    ping(t) {
        this.queue.push(t);
        while (this.queue[0] < t - 3000) {
            this.queue.shift();
        }
        return this.queue.length;
    }
}
