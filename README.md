# Primeira Ação

1- Componente Principal: Vamos criar um componente principal chamado Calculator que irá conter toda a lógica e a interface da nossa calculadora.

2- Estado (State): Precisaremos de alguns estados para controlar:
displayValue: O valor que será mostrado no display da calculadora. Inicialmente será "0".
operator: O operador que o usuário selecionou (+, -, *, /). Inicialmente será null.
firstOperand: O primeiro número que o usuário digitou. Inicialmente será null.
waitingForSecondOperand: Uma variável booleana para indicar se estamos esperando o segundo número da operação. Inicialmente será false.

3- Interface (JSX): A interface da calculadora será composta por:
Um display para mostrar o displayValue.
Botões para os números de 0 a 9.
Botões para as operações (+, -, *, /).
Um botão para o ponto decimal (.).
Um botão para limpar o display (C).
Um botão para realizar o cálculo (=).

4- Funções de Manipulação de Eventos: Precisaremos de funções para lidar com os cliques nos botões:
Uma função para lidar com os cliques nos botões de número.
Uma função para lidar com os cliques nos botões de operação.
Uma função para lidar com o clique no botão de limpar.
Uma função para lidar com o clique no botão de igual.
Uma função para lidar com o clique no botão de ponto decimal.

5- Lógica de Cálculo: Dentro dessas funções, implementaremos a lógica para realizar as operações matemáticas com base nos estados.


# Segunda Ação

1- Implementar a Função handleNumberClick, que receberá o valor do número que foi clicado como argumento.

2- Conectar a Função aos Botões de Número.