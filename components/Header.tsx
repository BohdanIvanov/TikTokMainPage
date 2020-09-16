import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Following</Text>
    <Text style={styles.separator}>|</Text>
    <Text style={[styles.text, styles.bold]}>For you</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    top: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 2,
  },
  separator: {
    color: '#fff',
  },
  text: {
    paddingHorizontal: 10,
    color: '#fff',
  },
  bold: {
    fontWeight: '700',
  },
});
