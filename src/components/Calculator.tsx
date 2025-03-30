import { useState } from 'react';

// Interface para as props (propriedades) que o componente Calculator pode receber
interface CalculatorProps {}

// React.FC é um tipo genérico que representa um componente funcional do React
const Calculator: React.FC<CalculatorProps> = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  // Criamos o estado waitingForSecondOperand para indicar se o usuário já digitou o primeiro número e o operador, 
  // e agora estamos esperando o segundo número
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

  // Dentro do "return", temos o JSX que define a estrutura visual do nosso componente
  return (
    <div>
      {/* Display da Calculadora */}
      <div>{displayValue}</div>

      {/* Botões da Calculadora */}
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>/</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>*</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
      </div>
      <div>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>+</button>
      </div>
      <div>
        <button>C</button>
      </div>
    </div>
  );
};

export default Calculator;