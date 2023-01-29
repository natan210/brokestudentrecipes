import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import IngredientsDetailsScreen from './src/screens/IngredientsDetails/IngredientsDetailsScreen';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Oil",
    photo_url:
      "https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Salt",
    photo_url:
      "https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Chicken breast",
    photo_url:
      "https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6",
  },
];

const Item = ({ title, photo_url }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image source={photo_url} />
  </View>
);
const renderItem = ({ item }) => (
  <Item photo_url={item.photo_url} title={item.title} />
);
const Ingredients = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* <IngredientsDetailsScreen /> */}
    </SafeAreaView>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
