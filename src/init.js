$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer);
    // console.log(dancer.$node)
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });

  $('.LineUpLeft').on('click', function(event) {
    var top = 10;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      top += 100;
      dancer.setPosition.call(dancer, top, 10);
    }
  });

  $('.findPartner').on('click', function(event) {
    var top = 100;
    var left = 100;
    var left2 = 120;
    for (var i = 0; i < window.dancers.length; i += 2) {
      var dancer = window.dancers[i];
      var dancer2 = window.dancers[i + 1];
      top += 100;
      dancer.setPosition.call(dancer, top, left);
      dancer2.setPosition.call(dancer2, top, left2);
    }
  });

  // $('.dancer').on('mouseover', function(event) {
  //   var style = {
  //     // visibility: hidden;
  //     display: none
  //   };
  //   $('.dancer').css(style);
  // });


});





// $('.findPartner').on('click', function(event) {
//   var newList = [];
//   var nodeMatch;
//   var smallNum = 1000000000;

//   for (var i = 0; i < window.dancers.length; i++) {
//     var dancer = window.dancers[i];
//     var currentLeft = dancer.$node.left;
//     var currentTop = dancer.$node.top;
//     console.log(dancer);

//     for ( var j = i + 1; j < window.dancers.length; j++ ) {
//       var closest;
//       var nextDancer = window.dancer[j];
//       var nextDancerTop = nextDancer.$node.top;
//       var nextDancerLeft = nextDancer.$node.left;
//       var distance = ((currentLeft - nextDancerLeft)**2 + (currentTop - nextDancerTop)**2)**(1/2);
//       var count = mainLeft - secondDancer.left;
//       count += maintop - secondDancer.top;
//       if ( count < smallNum ) {
//         nodeMatch = secondDancer;
//       }
//     }
//     newList.push(nodeMatch);


//   }