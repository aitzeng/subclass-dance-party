var morphDancer = function(top, left, timeBetweenSteps) {
  popDancer.call(this, top, left, timeBetweenSteps);


};

morphDancer.prototype = Object.create(popDancer.prototype);

morphDancer.prototype.constructor = morphDancer;

morphDancer.prototype.step = function() {
  popDancer.prototype.step.call(this);

  var rand = Math.floor(Math.random() * 50);
  var newStyle = {
    width: rand,
    height: rand
  };
  this.$node.css(newStyle);


  // circleDancer.prototype.moveAround();

};

morphDancer.prototype.moveAround = function() {
  var styleSettings = {
    top: this.top + 10,
    left: this.left + 10
  };
  this.$node.css(styleSettings);
}











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
