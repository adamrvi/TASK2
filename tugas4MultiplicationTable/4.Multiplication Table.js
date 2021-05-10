function multiplicationTable(){
 const number = document.getElementById("data").value;
 let length = 10;
 let i = 1;
 let temp = [];
 for(i = 1; i <= length; i++){
 temp.push("<br>" + number + " * " + i + " = " + (i * number));
}document.getElementById('output').innerHTML = temp.join(" ");
}