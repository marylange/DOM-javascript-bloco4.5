/*
Após o término dos exercícios de hoje.
Criar uma lista (ul, li) dinâmica:
Os itens com índice par devem receber a classe par;
Os itens com índice impar devem receber a classe impar;
O último item da lista deve conter as classes impar e par.
*/

const createElements = () => {
    const lista = ['bolo', 'arroz', 'feijão'];

    const tagUl = document.createElement('ul');
    
    for(let i = 0; i < lista.length; i += 1) {
        const tagli = document.createElement('li');

        if(i % 2 === 0) {
            tagli.className = 'par';
        } else {
            tagli.className = 'impar';
        }
        tagli.innerText = lista[i];

        tagUl.appendChild(tagli);
    }
    return tagUl;
}

const tagUl = createElements();
const elementoDiv = document.getElementsByClassName('center-content');
elementoDiv[0].appendChild(tagUl);