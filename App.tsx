import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from './components/Card';
import SENTIERS from './data/trail';

export default function App() {
  const [count, setCount] = useState(0);
  const [rechereche, setRecherche] = useState('');

  const resultats = SENTIERS.filter((s) =>
    s.nom.toLowerCase().includes(rechereche.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍀</Text>
      <Text style={styles.titre}>TrailMap</Text>
      <Text style={styles.sousTitre}>Découvrez les meilleurs sentiers de randonnée</Text>

      <Pressable onPress={() => {
        setCount(count + 1);
        console.log('Touché !');
        }}>
        <Text>Touchez-moi</Text>
      </Pressable>
      <Text>Nombre de touches : {count}</Text>
      <View>
        <TextInput
          placeholder="Rechercher un sentier..."
          value={rechereche}
          onChangeText={setRecherche}
        />
      </View>
      <ScrollView>
        {resultats.map((sentier) => (
          <Card
            key={sentier.id}
            nom={sentier.nom}
            difficulte={sentier.difficulte}
            distancekm={sentier.distanceKm}
            photo={sentier.photo}
          />
        ))}

        {resultats.length === 0 && (
          <Text>Aucun sentier trouvé pour "{rechereche}"</Text>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#135635',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 64,
  },
  titre: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sousTitre: {
    fontSize: 18,
    color: '#cfe8d5',
    marginTop: 8,
  },
});
