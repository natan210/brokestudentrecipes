import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {e} from 'datafetch.js';






/**
 * @author Nathaniel Israel
 * This uses react native to display data on an ios or android device
 */



/**
 * This is the app that is exported onto the screen. It has all the formatting
 */
const App = () => {
 
  
  
  return (
    <>
      <View style={Styles.header}>
        <Text style={Styles.headerfont}>{e.name} recipe</Text>
      </View>
      <View style={Styles.ingredients}>
        <Text style={Styles.ingredientsfont}>ingredients:</Text>
      </View>
      <View style={Styles.ingredients}>
        <FlatList //in 
          data={e.ing}
          renderItem={({item}) => (
            <Text style={Styles.ingredientsfont}>{item}</Text>
          )}
        />
        <Text style={Styles.ingredientsfont}>Instructions:</Text>
        <FlatList 
          data={e.instructions}
          renderItem={({item}) => (
            <Text style={Styles.ingredientsfont}>{item}</Text>
          )}
        />
      </View>
    </>
  );
};


  /**
   * These are the styles that are going to be used for the recipe card. 
   */
const Styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    backgroundColor: 'pink',
  },

  headerfont: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  ingredients: {
    paddingLeft: 10,
  },
  ingredientsfont: {textAlign: 'left', fontSize: 30, color: 'darkblue'},
});

export default App;
