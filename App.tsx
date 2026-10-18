import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍀</Text>
      <Text style={styles.titre}>TrailMap</Text>
      <Text style={styles.sousTitre}>Découvrez les meilleurs sentiers de randonnée</Text>
      <Card 
        nom="Shadow Garden"
        difficulte="Facile"
        distancekm={7}
        photo={require('../assets/images/photo1.png')}
      />
      <Card 
        nom="Monkey D Luffy'"
        difficulte="Moyenne"
        distancekm={11}
        photo={require('../assets/images/photo2. jpg')}
      />
      <Card 
        nom="Kafka Hibino"
        difficulte="Difficile"
        distancekm={19}
        photo={require('../assets/images/photo3.jpg')}
      />
      <Card 
        nom="Kafka Hibino"
        difficulte="Difficile"
        distancekm={19}
        photo={require('../assets/images/photo3.jpg')}
      />
      <Card 
        nom="Kafka Hibino"
        difficulte="Difficile"
        distancekm={19}
        photo={require('../assets/images/photo3.jpg')}
      />
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
