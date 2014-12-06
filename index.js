var lazyjs = {};

// pass an alternative default value
lazyjs.d = lazyjs.defaultValue = function defaultValue(obj, defValue){
  if(obj == undefined){
    if(typeof obj == "function"){
      return defValue();
    }
    return defValue;
  }
  return obj;
}

lazyjs.mk = function mk(el){
  return document.createElement(el);
}

if(module != undefined && module.exports != undefined){
  module.exports = lazyjs;
}
