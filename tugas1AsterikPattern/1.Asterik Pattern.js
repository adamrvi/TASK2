
function createHalfPyramid () {
let height = document.getElementById("data").value;

  for (let i = 1; i <= height; i++) {
    let row = " ";

    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    document.write(row);
    document.write("</br>");

  } 
}



