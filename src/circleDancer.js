var circleDancer = function(top, left, timeBetweenSteps) {
  popDancer.call(this, top, left, timeBetweenSteps);

};

circleDancer.prototype = Object.create(popDancer.prototype);

circleDancer.prototype.constructor = circleDancer;

circleDancer.prototype.step = function() {
  popDancer.prototype.step.call(this);
  this.$node.fadeIn('slow');
};

circleDancer.prototype.move = function() {


  // this.t += 0.05;

  // var r = 100; // radius
  // var xcenter = 100; // center X position
  // var ycenter = 100; // center Y position

  // var newLeft = Math.floor(xcenter + (r * Math.cos(this.t)));
  // var newTop = Math.floor(ycenter + (r * Math.sin(this.t)));

  // this.$node.animate({
  //   top: newTop,
  //   left: newLeft,
  // }, 1, function() {
  //   circleDancer.prototype.move();
  // });
};