import { SafeAreaView, ScrollView } from 'react-native';
import ProductCard from './ProductCard';

export default function App() {
  const cardapio = [
    { nome: "Beef Burger", calorias: 70, preco: 12.00, imagemUrl: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
    { nome: "Pancakes", calorias: 60, preco: 15.00, imagemUrl: "https://cdn-icons-png.flaticon.com/512/2454/2454033.png" }
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <ScrollView style={{ padding: 20 }}>
        <ProductCard dados={cardapio[0]} />
        <ProductCard dados={cardapio[1]} />
      </ScrollView>
    </SafeAreaView>
  );
}