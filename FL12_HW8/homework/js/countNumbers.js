const makeNumber = (str) => {
    let newStr = str.split('');
    let nums = newStr.filter((el) => {
        return parseInt(el);
    })
    nums = nums.join('');
    return nums;
}
const countNumbers = (arr) => {
    let numbers = makeNumber(arr);
    let result = {};
    for (let i = 0; i < numbers.length; i++) {
        let num = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                num++
            }
        }
        result[`'${numbers[i]}'`] = num;
    }
    return result;
}

countNumbers('erer384jj4444666888jfd123');