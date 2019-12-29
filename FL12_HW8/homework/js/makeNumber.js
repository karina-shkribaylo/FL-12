const makeNumber = (str) => {
    let newStr = str.split('');
    let nums = newStr.filter((el) => {
        return parseInt(el);
    })
    nums = nums.join('');
    return nums;
}
makeNumber('erer384jjjfd123');