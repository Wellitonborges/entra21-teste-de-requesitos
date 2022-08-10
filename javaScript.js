let string = 'String';   // string
console.log(string);
console.log('Opa Eu sou uma ' + typeof string);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

let number = 1234; //number
console.log(number);
console.log('Opa Eu sou um ' + typeof number);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

var boolean = true // boolean
console.log(boolean);
console.log('Opa Eu sou um ' + typeof boolean);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

var arrays = ['Oi ', 'Eu ', 'Sou ', 'Um ', 'Array ']; // array
console.log(arrays);
Array.isArray
console.log('Opa Eu sou uma ' + typeof arrays + ' Não sei como fazer para aparecer como array mais é um array');
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');


var objeto = {
    nome: 'Welliton',  //object json
    idade:30,
    filhos:'Larissa'
}
console.log('Opa Eu sou um ' + typeof objeto+ ' json');
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');





function tipo(){

    switch (tipo) {
    case 'number':
    console.log('Ola eu sou um Numero e posso realizar calculos matematicos ');
    
        break;

    case 'string':
        console.log("Ola eu Sou uma String e cmg vc pode digitar textos livros e tudo que estiver pensando");
}
}

//criando function if 
function tiposPrimitivos() {

if (tiposPrimitivos == 'numero'){
    tipo()
}else{
    (tiposPrimitivos == 'string')
  tipo()
        
}
}