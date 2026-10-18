import { Image, View, Text } from 'react-native';
import { styles } from '../styles';
// import photo1 from '../assets/images/photo1.png';

interface CardProps {
     nom: string;
     difficulte: string;
     distancekm: number;
     photo: any;
}

export const Card = ({ nom, difficulte, distancekm, photo }: CardProps) => {
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
          </View>
    </View>
  )
}
