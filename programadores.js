/*==============================================================
Crie um programa que armazena um array de usuários (objetos), 
cada usuário tem um nome e suas tecnologias (novo array).
==============================================================*/


//Usuarios = variável global em array.

const usuarios = [
    {
        nome: 'Carlos', tecnologia: [
        'Python',
        'HTML'
        ]
    },
    {
        nome: 'Ricardo', tecnologia: [
            'CSS',
            'HTML'
        ]
    },
    {
        nome: 'Vitor', 
        tecnologia: [
            'JavaScript', 
            'Node.js'
        ]
    }
]

/*==========================================================
Percorra a lista de usuários com uma estrutura de repetição 
imprimindo em tela as informações dos usuários:
        Carlos trabalha com HTML, CSS
        Jarmine trabalha com JavaScript, CSS
        Tuane trabalha com HTML, Node.js
============================================================*/

//Declarando função/método.

 function imprimirInfo(){
    for (let i = 0; i < usuarios.length; i++ ) {
        console.log(`O programador ${usuarios[i].nome} trabalha com ${usuarios[i].tecnologia}`)
    }
 }


 //Chamando a função/método.

 imprimirInfo()



