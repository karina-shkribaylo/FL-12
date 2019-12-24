let a = +prompt('Enter "a" value');
let b = +prompt('Enter "b" value');
let c = +prompt('Enter "c" value');

let discriminant;


if(isNaN(a) || a === 0 || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
        discriminant = Math.pow(b, 2) - 4 * a * c;
        
        if (discriminant > 0) {
            let x1 = Math.round( (-b + Math.sqrt(discriminant)) / (2 * a) );
            let x2 = Math.round( (-b - Math.sqrt(discriminant)) / (2 * a) ); 
            console.log('x1 = ' + x1);
        console.log('x2 = ' + x2);
        }
         else if (discriminant === 0) {
            let x = Math.round(-b / (2 * a));
             console.log('x = ' + x);
             
         }
         else {
            console.log('no solution'); 
             
         }
        }