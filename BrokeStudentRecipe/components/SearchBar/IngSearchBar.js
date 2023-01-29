//Mohamed
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import DropDown from './DropDown';

export default function IngSearchBar() {
  //dummy data
  const [dataSource] = useState(['salt', 'pepper', 'chicken', 'beef', 'pasta', 'cheese', 
  'milk', 'onion', 'onion powder', 'ginger'])
  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)

  const onSearch = (text) => {
    if (text) { //if there is text in the box 
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor='white'
        onChangeText={onSearch}

      />
      {//display dropdown menu when searching
        searching &&
        <DropDown
          onPress={() => setSearching(false)}
          dataSource={filtered} />
      }
    </View>
  )
}


const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  marginTop: '20%',
  flex: 1
},
textInput: {
  backgroundColor: 'gray',
  width: '80%',
  borderRadius: 5,
  height: 50,
  fontSize: 20,
  fontWeight: 'bold',
  paddingHorizontal: 10,
},
});