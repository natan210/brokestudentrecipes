import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

//currently, I still need to improve the basic ascthetic of the app, and add images, and make it work with the api. However, I have a strong start
// and with a little bit of work can get this app to fit in with our project.
const App = () => {
  class Recipe {
    //constructor for recipe. This creates the object that will be displayed in this app
    constructor(name, image, i1, i2) {
      this.name = name;
      this.image = image;
      this.ing = i1;
      this.instructions = i2;
    }
  }
  //making a sample recipe to display. will be easier once there is a place to export from
  const ing = ['egs', 'ham', 'onion', 'garlic powder'];
  const inst = [
    '1. Dice onions',
    '2. Whisk three eggs in bowl',
    '3. Add ham, onion, and garlic powder to bowl',
    '4. Dump bowl into medium pan, let cook for 3 minuts',
    '5. Flip over and  let cook for 90 seconds',
    '6. Take out of pan onto plate, let cool for 5 minutes',
    '7. Enjoy food!',
  ];
  const pict = 'https://images.app.goo.gl/7XHQ3DqZnb4jEXCK8';

  const Omelette = new Recipe('Omelette', pict, ing, inst);
  // I need to add an image to my app, however it currently isn't working. It would be in this section.
  return (
    <>
      <View style={Styles.header}>
        <Text style={Styles.headerfont}>{Omelette.name} recipe</Text>
      </View>
      <View style={Styles.ingridients}>
        <Text style={Styles.ingridientsfont}>Ingridients:</Text>
      </View>
      <View style={Styles.ingridients}>
        <FlatList //in the future, i might make this a checkable off list, so a user can take ingridients off as they're accounted for.
          data={Omelette.ing}
          renderItem={({item}) => (
            <Text style={Styles.ingridientsfont}>{item}</Text>
          )}
        />
        <Text style={Styles.ingridientsfont}>Instructions:</Text>
        <FlatList //similarily, this might be one where users can check off instructions as they complete it.
          data={Omelette.instructions}
          renderItem={({item}) => (
            <Text style={Styles.ingridientsfont}>{item}</Text>
          )}
        />
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  //these are all the fonts I'm currently using. I will probably change the fonts between ingridients and instructions,
  //plus add background color.
  header: {
    paddingTop: 10,
    backgroundColor: 'pink',
  },

  headerfont: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  ingridients: {
    paddingLeft: 10,
  },
  ingridientsfont: {textAlign: 'left', fontSize: 30, color: 'darkblue'},
});

export default App;
