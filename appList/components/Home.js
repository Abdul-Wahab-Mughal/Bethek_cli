/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { PureComponent } from 'react';
import {
  View, FlatList, TouchableOpacity, Text, ActivityIndicator, StyleSheet, TextInput,
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

import HomeListings from '../Listings/HomeListings';
import color from '../config/color';
import Footer from './Footer';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: '' };
    this.arrayholder = [];
  }

  async componentDidMount() {
    return await fetch('http://hostels4u.com/ep/hostels-all')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch((error) => console.log('there is a error on internet : ' + error));
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#fff',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 0 }}>
          <ActivityIndicator size="large" color={color.app} />
        </View>
      );
    }
    return (
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>

            <Text style={styles.TopText}>
              Search for Hostels
            </Text>

            {/* Search bar    */}

            <TouchableOpacity
              style={{
                borderRadius: 80,
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 50,
                left: 30,
                padding: 5,
                color: '#A6A6A6',
                flexDirection: 'row',
              }}
            >
              <EvilIcons
                name="search"
                size={26}
                color="#A6A6A6"
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              />
              <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => this.SearchFilterFunction(text)}
                //value={this.state.text}
                placeholder="Search Here ..."
                placeholderTextColor="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Search')}
              style={{
                backgroundColor: 'white',
                width: 33,
                padding: 5,
                left: 225,
                top: 25,
                borderRadius: 100,
              }}>
              <Feather name={'filter'} size={22} />
            </TouchableOpacity>
            {/* Search Bar The End  */}
          </View>
        }





        data={this.state.dataSource}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        renderItem={(datas) => (
          <HomeListings {...datas.item} navigation={this.props.navigation} key={datas.item} />
        )}
        keyExtractor={(item, index) => { return index.toString(); }}
        enableEmptySections={true}




        ListFooterComponent={
          <Footer />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 80,
    backgroundColor: color.app,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  TopText: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 20,
    position: 'absolute',
    left: 100,
    right: 100,
    top: 13,
    paddingTop: 15,
  },
  textInputStyle: {
    height: 30,
    width: 220,
    padding: 5,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#fff',
    borderRadius: 80,
    color: 'black',
  },
});

export default Home;
