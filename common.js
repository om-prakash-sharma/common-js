
/**
* 	this method help to check if array is empty or not 
**/
Object.defineProperty(Array.prototype, 'notEmptyArray', {
    value: function () {
          const self = this;
          return self && Array.isArray(self) && self.length;
      },
    enumerable: false
});
  
/**
* 	this method help to check if array is empty or not 
**/
Object.defineProperty(String.prototype, 'notEmpty', {
    value: function () {
          const self = this;
          return self != null && self != undefined && self != "";
      },
    enumerable: false
});

