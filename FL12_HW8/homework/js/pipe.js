function addOne(x) {
    return x + 1;
}
const pipe = (number, ...functions) => {
    for (let func of [...functions]) {
        number = func(number);
    }
    return number;
}

pipe(1, addOne);