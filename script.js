var vetor = [];
function nome() {
    var input = document.querySelector("#aluno");
    if (input.value != "") {
        var div = document.querySelector("#div");
        var parag = document.createElement("p");
        var input_1 = document.querySelector("#aluno");
        var text = document.createTextNode(input_1.value);
        div.appendChild(parag);
        parag.appendChild(text);
        vetor.push(input_1.value);
        console.log(input_1.value);
    }
}
