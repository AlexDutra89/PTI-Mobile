import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ dados }) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titulo}>{dados.nome}</Text>
        <Text style={styles.detalhes}>{dados.calorias} Calories</Text>
        <Text style={styles.preco}>${dados.preco.toFixed(2)}</Text>
      </View>
      <Image source={{ uri: dados.imagemUrl }} style={styles.foto} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 20, backgroundColor: '#FFF', borderRadius: 15, marginVertical: 10, alignItems: 'center', elevation: 3 },
  titulo: { fontSize: 18, fontWeight: 'bold' },
  detalhes: { color: '#666', marginVertical: 5 },
  preco: { color: '#F4B400', fontSize: 18, fontWeight: 'bold' },
  foto: { width: 80, height: 80, borderRadius: 10 }
});