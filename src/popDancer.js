var popDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

popDancer.prototype = Object.create(makeDancer.prototype);
popDancer.prototype.constructor = popDancer;

popDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.animate({height: "20px"}, 700)
  var back = ['purple', 'blue', 'gray', 'green', 'black'];
  var rand = back[Math.floor(Math.random() * back.length)];
  this.$node.css('borderColor', rand);
};

