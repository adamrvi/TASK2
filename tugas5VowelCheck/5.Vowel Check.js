function vowelCheck(){
    let character = document.getElementById("data").value;
    character = character.toLowerCase();
    let condition;
    if ( character == "a"|| character == "i"|| character == "u"||character == "e"||character == "o") {
        condition = "adalah huruf vokal";
    } else {      
        condition = "bukan huruf vokal";        
    }
    document.getElementById('output').value = character + " " + condition;   
}

