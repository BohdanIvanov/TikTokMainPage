import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BottomTabBar from '../components/BottomTabBar';
import Header from '../components/Header';
import ContentList from '../components/ContentList';

// Data to display videos
import data from '../data';

const Home = () => (
  <View style={styles.screen}>
    <Header />
    <View style={styles.mainSection}>
      <ContentList data={data} />
    </View>
    <View style={styles.bottomSection}>
      <BottomTabBar />
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  mainSection: {
    zIndex: 1,
    height: Math.round(Dimensions.get('window').height * 0.9),
  },
  bottomSection: {
    zIndex: 5,
    height: Math.round(Dimensions.get('window').height * 0.1),
  },
});

export default Home;
