module.exports = function solveEquation(equation) {
    
    var str = equation.replace(/\s/g, '');
    var a = str.split('*')[0];
    var b = (str.split('^2')[1]).split('*x')[0]; 
    var c = str.substring(str.lastIndexOf('x')+1);
    var result = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    
    var arr = [];
    
    if (a<0) {
        arr.push(Math.round(result2));
        arr.push(Math.round(result));
    }
    else {
        arr.push(Math.round(result));
        arr.push(Math.round(result2));
    }
return arr;
}
