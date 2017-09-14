'use strict';
module.exports = function() {
  var mySecret = {};

  return {
    setValue: setValue,
    getValue: getValue
  };

  function setValue( key, value ) {
    mySecret[key] = value;
  }

  function getValue( key ) {
    if (key === undefined || !mySecret.hasOwnProperty(key)) {
      return null;

    } else if (mySecret.hasOwnProperty(key)) {
      return mySecret[key];
      //mySecret.key
    }
  }
};