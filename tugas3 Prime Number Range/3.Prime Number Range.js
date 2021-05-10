function primeNumber(){

let start = document.getElementById("dataStart").value;
let end = document.getElementById("dataEnd").value;
let count = 0;

document.write("Bilangan prima antara " + start + " dan " + end + ":<br>");
for(start = start; start <= end; start++){
 for(i=1; i <= start; i++)
 {
  if(start % i == 0)
   count++;
 }
 if (count == 2)
 document.write(start +" ");
  count = 0;
}
}