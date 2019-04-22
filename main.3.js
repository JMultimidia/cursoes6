//DESESTRURAÇÃO
const usuario = {
    nome: 'Johannes',
    idade: 40,
    endereco: {
        cidade: 'Iguatu',
        estado: 'CE',
    },
};

//EXIBIÇÃO PADRÃO
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome}) {
    console.log(nome, idade);
}

mostraNome(usuario);