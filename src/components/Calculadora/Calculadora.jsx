import { useState } from 'react';
import Button from '../Button/Button';

export const Calculadora = () => {
    const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Erro');
      }
    } else {
      setInput(input + value);
    }
  };

    return (
        <div className="calculadora">
          <input type="text" value={input} readOnly />
          <div className="teclado">
            {['1', '2', '3', '/'].map((item) => (
              <Button key={item} onClick={handleClick}>
                {item}
              </Button>
            ))}
            {['4', '5', '6', '*'].map((item) => (
              <Button key={item} onClick={handleClick}>
                {item}
              </Button>
            ))}
            {['7', '8', '9', '+'].map((item) => (
              <Button key={item} onClick={handleClick}>
                {item}
              </Button>
            ))}
            {['0', '.', '=', '-'].map((item) => (
              <Button key={item} onClick={handleClick}>
                {item}
              </Button>
            ))}
            <Button onClick={handleClick}>C</Button>
          </div>
        </div>
      );
}