import { Image, View, Text, Pressable } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
// import photo1 from '../assets/images/photo1.png';

interface CardProps {
     nom: string;
     difficulte: string;
     distancekm: number;
     photo: any;
}

export const Card = ({ nom, difficulte, distancekm, photo }: CardProps) => {
     const [favoris, setFavoris] = useState(false);
  return (
    <View style={styles.cardContainer}>
          <View>
               <Image
                    source={photo}
                    style={ styles.cardImage }
               />
          </View>
          <View>
               <View>
                    <Text>{nom}</Text>
               </View>
               <View>
                    <Text>{difficulte}</Text>
                    <Text>{distancekm} km</Text>
               </View>
               <Pressable onPress={() => setFavoris(!favoris)}>
                    <Text>{favoris ? '❤️' : '🤍' }</Text>
               </Pressable>
          </View>
    </View>
  )
}
