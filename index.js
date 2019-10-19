//1
var a = prompt("Insert a");
var b = prompt("Insert b");
var c = prompt("Insert c");
var result = '';

function getDiscriminant(a, b, c) {
    var d = b * b - 4 * a * c;
    return d;
}

var d = getDiscriminant(a, b, c);
result = 'Discriminant: ' + d;
alert(result);

function getQadratic(a, b, d) {
    var x1, x2;
    var result = '';
    if (d < 0) {
        result = 'Уравнение не имеет действительных корней';
        alert(result);
    };
    
   if (d == 0) {
        x1 = -b / (2 * a);
        result = 'Уравнение имеет 1 корень';
        alert(result);
    };

    if (d < 0) {
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);
        result = 'Уравнение имеет 2 корня';
        alert('x1 = ' + x1);
        alert('x2 = ' + x2);
    };

    else {
        alert('Error');
    };
}

getQadratic(a, b, d);