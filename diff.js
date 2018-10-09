/*! diff v0.0.0 - MIT license */
'use strict';


var diff = function (list) {

var answer = [];
var previous = 0;

  for (var i = 0; i < list.length; i++)
  {
    //if(i!=0)
  //  {
      answer.push(Math.abs(list[i] - previous))
      previous = list[i]
  //  }

  }
 return answer;
}

if ( typeof module !== "undefined" ) {
  module.exports = diff;
}
