
function fibonaciNumber(){
let a = 0;
let b = 1;
let c ;

let inputData = document.getElementById("data").value;
document.write(a + ",");
document.write(b + ",");
for(let i=3; i <= inputData; i++)
{
    c = a + b ;
    a = b ;
    b = c;
    document.write(c + ",");
}   
}