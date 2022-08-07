
import { useState } from 'react';
import Keyboard from 'react-simple-keyboard';

const Teclado = () => {
  const [palabra, setPalabra] = useState('ssssss');
  const onChange = (input) => {
    console.log("Input changed", input);
    setPalabra(input);
  }

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  }

  return (
    <>
      <p>{palabra}</p>
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  )
}
export default Teclado