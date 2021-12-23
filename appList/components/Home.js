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
        //console.log(responseJson);
      })
      .catch((error) => console.log('there is a error on internet : ' + error));
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.title.includes(text) ? item : '';
      return itemData;
    });
    this.setState({
      dataSource: newData,
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.3, width: '90%', backgroundColor: '#fff' }} />
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
      <View style={{ flex: 1, backgroundColor: color.white }}>
        <FlatList
          style={{ flex: 1 }}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.TopText}>Search for Hostels</Text>

              {/* Search bar    */}
              <View style={{ flexDirection: 'row', top: 25, left: 15 }}>
                <View
                  style={{
                    borderRadius: 80,
                    backgroundColor: '#fff',
                    width: 220,
                    flexDirection: 'row',
                  }}
                >
                  <EvilIcons name="search" size={26} color="#A6A6A6" style={{ top: 10 }} />
                  <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    //value={this.state.text}
                    placeholder="Search Here ..."
                    placeholderTextColor="black"
                  />
                </View>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Search')}
                  style={{ backgroundColor: 'white', width: 40, left: 50, padding: 10, borderRadius: 100 }}>
                  <Feather name={'filter'} size={22} />
                </TouchableOpacity>
              </View>
              {/* Search Bar The End  */}
            </View >
          }

          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={(item) => (
            <HomeListings {...item} navigation={this.props.navigation} key={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          enableEmptySections={true}

        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 145,
    backgroundColor: color.app,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  TopText: {
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10,
  },
  textInputStyle: {
    width: '100%',
    padding: 5,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: 'white',
    borderRadius: 80,
    color: 'black',
  },
});

export default Home;
