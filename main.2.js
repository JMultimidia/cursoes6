const arr = [1, 3, 4, 5, 8, 9];

/*
const newArr = arr.map(function (item) {
    return item * 2;
});
*/
/*
const newArr = arr.map((item) => {
    return item * 2;
});
*/
//quando a função recebe apenas um parametro remove o parentese
const newArr = arr.map(item => {
    return item * 2;
});


//REDUDZINDO O CÓDIGO ACIMA QUANDO A FUNÇÃO NÃO RETORNA VARIAS LINHAS
const newArr2 = arr.map(item => item * 2);


console.log(newArr);
console.log(newArr2);

/*
const sum = arr.reduce(function(total, next){
    return total + next;
});

//0
//1

//1
//3
console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0; //pares
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);
*/