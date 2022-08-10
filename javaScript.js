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


//criando if 
function tiposPrimitivos(tipo) {

if (tiposPrimitivos == typeof number){
     console.log('isso é numero');
}else{
console.log('Opss deu errado');
}

if (tiposPrimitivos == typeof string){
    console.log('isso é uma String');
}else{
console.log('Opss deu errado');
}

}




// switch (tipo) {
//     case number:
//         if (number == typeof number){
//             console.log('Isso é um '+typeof number);
//             }else {
//                 console.log('Opss deu errado');
//             }
    
//         break;

//     case '':
//         console.log("");
// }