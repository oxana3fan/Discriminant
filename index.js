//1
var a = prompt("Insert a");
var b = prompt("Insert b");
var c = prompt("Insert c");
var result = '';

function showDiscriminant(a, b, c) {
    var d = b * b - 4 * a * c;
    return d;
}

var d = showDiscriminant(a, b, c);
result = 'Discriminant: ' + d;
alert(result);

function showQadratic(a, b, c, d) {
    var x;
    var result = '';
    if (d < 0) {
        result = 'Уравнение не имеет действительных корней';
        alert(result);
        breake;
    };
    
   else if (d = 0) {
        result = 
   }

    else (d < 0) {
        result = 
    }
}