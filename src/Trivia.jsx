import React, { useState } from 'react';
import './Trivia.css';
import logo from './images/logo.png';

function Trivia() {
  // Array de preguntas con sus opciones y respuesta correcta
  const preguntas = [
    {
      pregunta: '¿Cuál es la capital de Francia?',
      opciones: ['Madrid', 'Londres', 'París', 'Berlín'],
      respuestaCorrecta: 'París'
    },
    {
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['Nilo', 'Amazonas', 'Misisipi', 'Yangtsé'],
      respuestaCorrecta: 'Amazonas'
    },
    {
      pregunta: '¿Cuál es el planeta más grande del sistema solar?',
      opciones: ['Marte', 'Venus', 'Júpiter', 'Saturno'],
      respuestaCorrecta: 'Júpiter'
    }
  ];

  // Estados para controlar la pregunta actual, respuestas seleccionadas y mensaje de resultado
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [mensaje, setMensaje] = useState('');

  // Función para manejar la selección de una respuesta
  const handleSeleccionarRespuesta = (respuesta) => {
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
    if (respuesta === respuestaCorrecta) {
      if (preguntaActual === preguntas.length - 1) {
        setMensaje('¡FELICIDADES, GANASTE!');
      } else {
        setPreguntaActual(preguntaActual + 1);
        setMensaje('');
      }
    } else {
      setMensaje('¡GRACIAS POR PARTICIPAR!');
    }
  };

  // Función para manejar el evento de regresar
  const handleRegresar = () => {
    window.location.href = '/'; // Redirige al usuario a la página principal
  };

  return (
    <div className="TriviaContainer">
      <img src={logo} className="App-logo" alt="logo" />
      {/* Renderiza el mensaje de resultado o la pregunta actual */}
      {mensaje ? (
        <p className='Mensaje'>{mensaje}</p>
      ) : (
        <div className="Tarjeta">
          {/* Muestra la pregunta actual y las opciones */}
          <p className='Pregunta'>{preguntas[preguntaActual].pregunta}</p>
          <div className="Opciones">
            {preguntas[preguntaActual].opciones.map((opcion, index) => (
              <button key={index} className="Opcion" onClick={() => handleSeleccionarRespuesta(opcion)}>
                {opcion}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Botón para regresar */}
      <button className="BotonRegresar" onClick={handleRegresar}>Regresar</button>
    </div>
  );
}

export default Trivia;
