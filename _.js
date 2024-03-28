const _ = {
    clamp(num, lowerB, upperB){
      if(num < lowerB){
        return lowerB;
      }else if(num > upperB){
        return upperB;
      }else{
        return num;
      } 
    },
    inRange(num, start, end){
      if(end === undefined){
        end = start;
        start = 0;
      }
      if(start > end){
        let temp = end;
        end = start;
        start = temp;
      }
      let lowerNum = Math.min(num, start);
      let higherNum = Math.max(num, end);
      if(num === start) return true;
      if(lowerNum === num) return false;
      if(higherNum === num) return false;
      return true;
    },
    words(string){
      return string.split(" ");
    },
    pad(string, length){
      let newString = string;
      let newLength = length - string.length
      if(newLength > 0){
        if(newLength % 2 !== 0){
          newString += " "
          newLength--;
        }
        while(1 < newLength ){
          newString = " " + newString + " ";
          newLength /= 2;
        }
        return newString;
      }
       return newString;
    },
    has(object, key){
      if(object[key] !== undefined) return true
      return false;
    },
    invert(object){
      let invertedObject = {}
      for(let key in object){
        let temp = object[key];
        invertedObject[temp] = key;
      }
      return invertedObject;
    },
    findKey(object, funct){
      for(let key in object){
        if(funct(object[key])){
          return key
        }
      }
      return undefined;
    },
    drop(arr, num){
      let newArr = arr;
      do{
        newArr.shift();
        num--;
      }while(num > 0);
      return newArr;
    },
    dropWhile(arr, funct){
      let num = 0;
      let arrCopy = arr;
      let element = arr[num]
      while(funct(element, num, arrCopy)){
        arrCopy.shift();
        element = arrCopy[num];
      }
      return arrCopy;
    },
    chunk(arr, size = 1 ){
      let newArr = []
      while(newArr.length < size){
        newArr.push(arr.splice(0, size));
      }
      if(arr.length > 0){
        newArr.push(arr.splice(0, arr.length))
      }
      return newArr;
    }
  }
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;