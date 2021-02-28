/*==============================================================
                    Calculo de aposentadoria
nome = Rayato; sexo = masculino; idade = 30; contribuicao = 10; 
mulheres = 30 anos; homens = 35 anos;
somaicm = 85 anos; somaich = 95 anos;

Utilizando a regra 85-95, a soma da idade com o tempo de 
contribuição do homem precisa ser de no mínimo 95 anos, enquanto
a mulher precisa ter no mínimo 85 anos na soma;
================================================================*/

const nome = 'Rayato';
const sexo = 'M';
const idade = 30;
const contribuicao = 10;

const calculoContribuicao = idade + contribuicao;

const homemPodeAposentar = (sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95);
const mulherPodeAposentar = (sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85);

if (homemPodeAposentar || mulherPodeAposentar){

    console.log(`${nome}, voce pode se aposentar!`)

} else {

    console.log(`${nome}, voce não pode se aposentar!`)

}