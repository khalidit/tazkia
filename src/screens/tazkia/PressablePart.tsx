import { Avatar, Pressable } from '@react-native-material/core';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Text, Stack } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { TazkiaScreenNavigationProp } from '../../navigation/types';

export interface Part {
  name: string;
  route: 'Part1' | 'Part2' | 'Part3';
  description: string;
  imageSource: ImageSourcePropType;
}

interface Props {
  item: Part;
}
export default function PressablePart({ item }: Props) {
  const navigation = useNavigation<TazkiaScreenNavigationProp>();

  function handlePress() {
    navigation.navigate('Part3');
  }

  return (
    <Pressable onPress={handlePress}>
      <Stack style={styles.container}>
        <Avatar image={item.imageSource} imageStyle={styles.img} size={120} />
        <Text variant="h6">{item.name}</Text>
        <Text>{item.description}</Text>
      </Stack>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 80,
    backgroundColor: '#e7fbe8',
  },
  img: {
    width: 120,
    height: 120,
  },
});
