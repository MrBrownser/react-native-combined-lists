/**
 * Sample React Native ItemsCarousel
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

export default class ItemsCarousel extends Component<Props> {
  renderHorizontalItem(data){
    return(
      <View style={{height: 30, width: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{data.item.key}</Text>
      </View>
    )
  };

  render() {
    return (
      <FlatList
        style={{height: 50, backgroundColor: '#AAAAAA'}}
        data={testArray}
        renderItem={this.renderHorizontalItem}
        keyExtractor={(item, index) => item.key}
        horizontal
      />
    );
  }
}
