// Aula de Objetos

// Prática guiada
// Construindo objetos

const estudante = {
    nome: "Leonardo",
    sobrenome: "Cannone",
    numeroMatricula: "1234",
    notasSemestre: [3, 10, 5]
}
console.log(estudante);

// acima das 4 propriedades temos 3 Strings, e 1 Arrays, este último foi o melhor tipo para inserirmos mais de uma nota das provas do semestre. Na impressãom chamamos o objeto estudante.

// Lendo e adicionando a objetos

// notação de colchetes - POUCO UTILIZADO
// estudante["modulo"] = 1

// notação de ponto - MUITO MAIS UTILIZADO
estudante.modulo = 1

console.log(estudante.nome);
console.log(estudante["nome"]);

console.log(estudante.notasSemestre[1]);
// na linha acima, acessamos a propriedade pelo método de ponto (nome do objeto + ponto + nome da propriedade), e como ela é um Array, acessamos a segunda nota (2º elemento do Array) digitando o índice 1, e assim foi impresso o número 10 no Console. 
console.log(estudante.modulo);

// Copiando e alterando objetos

// Abaixo fizemos a cópia do objeto estudante pelo método spread, ou espalhamento em PT, e para isso utilizamos as reticências seguida do nome do objeto original, seguida da vírgula, pois sem ela o código trava. Importante notar que a construção desse objeto cópia segue a mesma sintaxe do objeto original, cria-se a const, sinal de igual, e abre-se as chaves. Abaixo comentei as alteraçoes que fizemos.
const copiaEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasSemestre: [...estudante.notasSemestre, 9],
    modulo: estudante.modulo+1

}
// Mudamos o nome alterando apenas a string inicial de "Leonardo" para "Astrodev". Já as demais alterações são um pouco mais subjetivas e complexas, que requerem mais prática e cenários reais pra entender a real aplicação. Para acrescentar então a nota 9 às notas do semestre, precisamos dentro dos colchetes (se tratando de um Array) repetir o spread ...estudante, chamar a propriedade notasSemestre, e após a vírgula adicionar a nota que queremos. Assim, o resultado no Console mostrará todos os números que já constavam no Array inicial mais o 9 no final. Tentei fazer de outra forma esse acréscimo da nota, mas esse método ensinado pela professora Ana foi o que deu o melhor resultado.
// É interessante dizer que nunca podemos chamar o nome do objeto dentro dele, ou seja das chaves, pois o Java devolve um erro que não lê mais o restante do código. 
// Já na alteração no módulo, a Ana chamou o objeto inicial, seguido do ponto ela chamou o módulo, e por se tratar de um Number ela digitou +1 e o Console mostrou o número 2 como resultado. É como eu disse acima, é uma forma menos óbvia e mais subjetiva de fazer essas alterações. 

console.log(copiaEstudante);

copiaEstudante.notasSemestre.push(10)
// Uma coisa interessante escrita na linha acima, como já estamos fora do novo objeto que foi copiado e também fizemos as alterações pedidas no slide, agora sim podemos chamar o nome do objeto copiaEstudante, e neste caso fizemos outra adição ao "novo" Array que é demonstrado no Console pelo console.log acima, e apesar do código estar abaixo do console.log, o número 10 foi devidamente adicionado ao final do Array utilizando o método push. Se tentarmos reproduzir esse Array com essa nova adição, precisaremos criar uma nova cópia dele, e somente assim ele será impresso por completo no Console, caso contrário se dermos console.log no código acima, irá aparecer apenas o tamanho do Array, no caso 5, e não o Array completo com todos os seus números. 

// Após praticar a escrita do comentário de código acima resolvi testar o código abaixo e funcionou conforme o esperdo. Fora do objeto eu chamei a propriedade notasSemestre, e fiz uma nova cópia agora já com a adição do 9 lá em cima, depois do 10 que ficou ali solta e apenas integrou o console do objeto copiado e modificado, e agora então obtivemos no Console uma nova atualização do Array, chamado de forma independente ali no console.log, ou seja, chamei apenas a propriedade novamente atualizada, e o resultado foi esse aqui >>>> (6) [3, 10, 5, 9, 10, 4].
notasSemestre = [...copiaEstudante.notasSemestre, 4]
console.log(notasSemestre);

// Copiando o próprio enunciado do Slide, por fim, vamos criar o array estudantesLabenu e adicionar a esse array os objetos estudante e copiaEstudante, que já estavam criados acima. Após isso, devemos imprimir o array estudantesLabenu no console. 
// Não ficou muito claro essa parte da prática guiada, mas de qualquer forma chamamos o Array fora dele, aplicamos o método push e adicionamos os objetos já criados acima.
const estudantesLabenu = []

estudantesLabenu.push(estudante, copiaEstudante)

console.log(estudantesLabenu);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Exercício de fixação

//Parte 1)
const carrinho = {
    nomeCliente: "Leonardo",
    formaPagamento: "Crédito",
    endereco: "Rua Palestra, 1914"
}

//Parte 2)
carrinho.compras = [
    {nomeProduto: "Leite 1L",
    precoProduto: 4.99,
    quantidadeComprada: 12},

    {nomeProduto: "Suco de Uva 1,5L",
    precoProduto: 11.99,
    quantidadeComprada: 4}
]

console.log(carrinho.compras.length);

// Parte 3) 

// Essa parte aqui da parte 3 eu fiz no dia seguinte da aula, após pegar o exemplo feito pelo Rafael Machado, que não seguiu o enunciado ao pé da letra mas acabou reforçando a importância de saber utilizar o método push pra inserir mais dados no final de um Array. Portanto essa anotação aqui está sendo feita depois dessa conclusão que fiz logo abaixo falando da importância dessa estapa do exercício de fixação, que agora eu acabei de incrementar. O resultado anteriormente eram 2 produtos, mas como acrescentei mais dois pelo método push, agora o resultado no Console é 4.

carrinho.compras.push( 
    {nomeProduto: "Azeite",
    precoProduto: 25,
    quantidadeComprada: 2},
    
    {nomeProduto: "Passata",
    precoProduto: 9.59,
    quantidadeComprada: 3}
)

const arrayCompras = carrinho.compras 

console.log("Quantidade de produtos dentro do array compras que existe no objeto carrinho:",arrayCompras.length)
// É importante salientar essa etapa do exercício de fixação. Para poder fazer o lenght, era necessário acessar a propriedade compras que tem um Array como valor, e pra isso foi/é necessário criar uma const, e dentro dela chamar o objeto carrinho e então acessar a propriedade compras. Somente assim é possível fazer o lenght conforme o exercício pedia, somente após acessarmos a propriedade compras mediante essa const que criamos. Tentei fazer direto sem a const, e o Javascript deu alguns erros variados e não me permitia fazer o lenght, então foi aí que me dei conta que criar a const me permitia acessar a propriedade compras e então mensurar a quantidade de produtos que havia dentro desse array, que por sua vez estava/está dentro do objeto carrinho.

// Depois do feedback da aula seguinte a esta, não sei se eu estava fazendo algo errado ontem e acreditei que criar essa const arrayCompras enfim meu permitiu fazer o lenght que o exercício pedia, mas talvez realmente nem precise, talvez eu estivesse fazendo algo errado e encontrei a solução criando a const. O importante é saber mais de uma forma de fazer, mas sempre importante também tentar deixar o código o mais simplificado possível. O log que acabei de criar abaixo dá o mesmo resultado com o log acima onde utilizei a variável, então fica como experiência. 

console.log(carrinho.compras.length);

// Parte 4)
const carrinhoPresente = {
    ...carrinho,
    nomeCliente: "Pessoa de Sorte",
    formaPagamento: "Cartão presente"
}

// Parte 5)
console.log(carrinho);
console.log(carrinhoPresente);


