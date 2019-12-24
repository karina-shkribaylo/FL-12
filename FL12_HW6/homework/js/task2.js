let a = +prompt('Enter "a" triangle side length');
let b = +prompt('Enter "b" triangle side length');
let c = +prompt('Enter "c" triangle side length');

if(isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers'); 
    
}else if ( a <= 0 || b <= 0 || c <= 0 ) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b <= c || a + c <= b || b + c <= a) {
    alert('Triangle doesn’t exist');
} else if ( a === b && a === c ) {
    alert('Equilateral triangle');
} else if (a === b || a === c || b === c) {
    alert('Isosceles triangle');
} else {
    alert('Scalene triangle');
}