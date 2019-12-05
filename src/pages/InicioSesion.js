import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../container/inicioSesion/Header';
import LoginRedes from '../container/inicioSesion/LoginRedes';
import Formulario from '../container/inicioSesion/Formulario';
import Preguntas from '../container/inicioSesion/Preguntas';

export default function InicioSesion() {
  return (
    <View style={style.container}>
        <Header />
        <LoginRedes />
        <Formulario />
        <Preguntas />
    </View>

  );
}
const style = StyleSheet.create({
  container: {
      flex: 6,
      backgroundColor: '#fff',
      padding: 30
  }
});
