import logo from './logo.svg';
import './App.css';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from './firebase/firebaseConfig.js';
import { async } from '@firebase/util';


function App() {
  const nose = useEffect(() => {

      const obtenerDatos = async() =>{
          const datos = await getDocs(collection(db,'usuarios'));
          console.log(datos.docs[0].data());

      }

      obtenerDatos();
  }, []);
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
      <p>{nose}</p>
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      </>
    );
  
}

export default App;
