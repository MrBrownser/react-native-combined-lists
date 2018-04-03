/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  List,
  ListView,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { testArray } from './testArray';
import ItemsCarousel from './ItemsCarousel';

type Props = {};
export default class App extends Component<Props> {
  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  renderItem(data){
    if (data.index === 5) {
      return <ItemsCarousel/>;
    }
    return (
      <View style={{height: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{data.item.key}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={testArray}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30,
  },
  list: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
});
