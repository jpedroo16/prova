let vetor: string[] = [];

function nome(){
    let input : HTMLInputElement | null =
    document.querySelector("#aluno")!;

    if(input.value != ""){
        let div : HTMLDivElement | null =
        document.querySelector("#div")!;

        let parag : HTMLElement | null =
        document.createElement("p");

        let input : HTMLInputElement | null =
        document.querySelector("#aluno")!;

        let text = document.createTextNode(input.value);

        div.appendChild(parag);
        parag.appendChild(text);
        vetor.push(input.value);
    console.log(input.value);
    }
    
}