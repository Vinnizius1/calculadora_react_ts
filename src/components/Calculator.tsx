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

    // Função para lidar com a entrada de números
    const handleNumberClick = (number: string) => {
        // Verificamos se estamos esperando o segundo operando. Se sim, 
        // isso significa que um operador já foi clicado e este é o primeiro dígito do segundo número
        if (waitingForSecondOperand) {
            setDisplayValue(number);
            setWaitingForSecondOperand(false);
            // Se não estamos esperando o segundo operando, significa que estamos digitando o primeiro número ou continuando a digitar o número atual
        } else {
            // Se não for "0", CONCATENAMOS o número clicado ao valor existente no displayValue
            setDisplayValue((prev)=> prev === "0" ? number : prev + number)
        }
    }

  // Dentro do "return", temos o JSX que define a estrutura visual do nosso componente
  return (
    <div>
      {/* Display da Calculadora */}
      <div>{displayValue}</div>

      {/* Botões da Calculadora */}
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button>/</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
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