import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { questions as preguntas } from './questions';
import Question from './components/Question';

export default function App() {
  const [preguntaActual, setpreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);

  const manejarRespuesta = (esCorrecta) => {
    if (esCorrecta) {
      setPuntaje(prevPuntaje => prevPuntaje + 1); // Aumenta el puntaje si la respuesta es correcta
    }

    if (preguntaActual < preguntas.length - 1) {
      // Si hay más preguntas, pasa a la siguiente pregunta
      setpreguntaActual(preguntaActual + 1);
    } else {
      // Si no hay más preguntas, muestra el puntaje final y reinicia el juego
      mostrarPuntajeFinal();
    }
  };

  const mostrarPuntajeFinal = () => {
    // Aquí podrías realizar cualquier acción adicional antes de mostrar el puntaje final
    // Por ejemplo, podrías guardar el puntaje en una base de datos, etc.
    // Luego muestras el puntaje final y reinicias el juego
    alert(`Tu puntuación final es: ${puntaje}`);
    reiniciarJuego();
  };

  const reiniciarJuego = () => {
    
    // Reinicia el estado del juego 
    setpreguntaActual(0);
    setPuntaje(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.puntaje}>Puntaje: {puntaje}</Text>
      {preguntaActual < preguntas.length ? (
        <Question
          pregunta={preguntas[preguntaActual]}
          onRespuesta={manejarRespuesta}
        />
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.finalPuntaje}>Tu puntuación final es: {puntaje}</Text>
          <Button title="Reiniciar" onPress={reiniciarJuego} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  puntaje: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  resultContainer: {
    alignItems: 'center',
  },
  finalPuntaje: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
