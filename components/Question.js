// components/Question.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//paso las props de la pregunta, las leo de questions.js

const Question = ({ pregunta, onRespuesta }) => {

  //Uso destructuración del array

  const { pregunta: texto, respuesta_correcta, respuestas_incorrectas } = pregunta;


const mezclarRespuestas = (respuestas_incorrectas, respuesta_correcta) => {

  // Combina todas las respuestas en un solo arreglo; las incorrectas y la correcta
  const respuestas = [...respuestas_incorrectas, respuesta_correcta];

  // Mezcla las respuestas aleatoriamente
  return respuestas.sort(() => Math.random());
};

//llamo a la funcion y la igualo a una constante
const respuestas = mezclarRespuestas(respuestas_incorrectas, respuesta_correcta);


  return (
    <View style={styles.container}>
      <Text style={styles.question}>{texto}</Text>

       {/* Por cada una de las respuestas ejecuto la funcion map para que cree un boton por opcion */}
      {respuestas.map((respuesta, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerButton}
          
          onPress={() => onRespuesta(respuesta === respuesta_correcta)}
        >
          <Text style={styles.texto}>{respuesta}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  answerButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Question;
