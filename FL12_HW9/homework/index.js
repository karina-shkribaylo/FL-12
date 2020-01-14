let convert = (...args) => {
    
    for (let i = 0; i < args.length; i++) {
       args[i] = typeof args[i] === 'string' ? Number(args[i]) : String(args[i]);
    }
    return args;
}

let executeforEach = (arr, callback) => {
    arr.forEach(elem => callback(elem));
}


let mapArray = (arr, callback) => {
  const res = [];
  executeforEach(arr, el => res.push(callback(Number(el))));
  return res;
}

let filterArray = (arr, callback) => {
    let res = [];
    executeforEach(arr, el => {
        if(callback(el) === true) {
            res.push(el);
        }
    });
    return res;
}


let flipOver = (str) => {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res;
}


let makeListFromRange = (arr) => {
    let res = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        res.push(i);
    }
    return res;
}



const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];

let getArrayOfKeys = (arr, key) => {
    let res = [];
    executeforEach(arr, el => res.push(el[key]));
    return res;
}

let substitute = (arr) => {
    const _30 = 30;
  return mapArray(arr, el => el < _30 ? '*' : el);
}


let getPastDay = (date, num) => {
    return new Date(
     date.getFullYear(),
     date.getMonth(),
     date.getDate() - num
   ).getDate();
 }

let formatDate = (date) => {

    let res = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    return res;
}
