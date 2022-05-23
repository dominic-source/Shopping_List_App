/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
    const rand = () => Math.random() * 123;
    const [items, setItems] = useState([
      {id: rand(), text: 'Milk'},
      {id: rand(), text: 'Eggs'},
      {id: rand(), text: 'Bread'},
      {id: rand(), text: 'Juice'},
    ]);

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id );
  });
};

const addItem = (text) => {
  if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'cancel', style: 'cancel' }]);
  } else {
    setItems(prevItems => {
      return [{id: rand(), text}, ...prevItems];
    });
  }
};
  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => (
      <ListItem item={item} deleteItem={deleteItem}/> )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
