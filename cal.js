function botao( num )
{
    //foi necessário criar essa função pois, para que os botões pudessem "ganhar vida", ou seja, na medida
    //em que fosse clicados, aparecer no visor o número clicado, ou os operadores;
    //bem como também para haver a concatenação na medida dos cliques em um certo número;
    //a variável "num" foi para que a mesma seja passada em parâmetro para que no código 
    // a mesma possa representar em relação ao valor do próprio botão, para não haver repetições do mesmo botão.
    // para que cada botão tenha uma leitura de valor diferente. ex: "1", '2', '3' etc..
    var salvo = document.calc.visor.value;
    document.calc.visor.value = salvo + num;
    
}

function reset()
{
    // Aqui no caso seria o código para limpar o visor, más pode perceber qu ele está limpando normalmente
}

function calcule()
{
    // Aqui no caso seria o codigo para calcular o visor
    // depois teria que pegar o valor do visor em uma variável 
    // em seguida também fazer o cálculo, neste caso com uma das ferramentas do JavaScript
    // neste caso teria que pegar o resultado e colocar no visor
}