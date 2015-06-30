// Code Wars
// Streams problem

var Stream = function(start, output, stepping) {
  // implement a constructor
  this.start = start;
  this.output = output;
  this.stepping = stepping;
};
Stream.prototype = {
  // implement the required functions
  head: function() {
    return this.output(this.start);
  },
  tail: function() {
    return new Stream(this.stepping(this.start), this.output, this.stepping);
  }
};

