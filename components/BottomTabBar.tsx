import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Icons
import HomeIcon from '../assets/icons/home.png';
import DiscoverIcon from '../assets/icons/discover.png';
import InboxIcon from '../assets/icons/message.png';
import ProfileIcon from '../assets/icons/profile.png';

const BottomTabBar = () => (
  <View style={styles.container}>
    <View style={styles.tabbar}>
      <TouchableOpacity onPress={() => {}} style={styles.tab}>
        <Image source={HomeIcon} resizeMode="contain" style={styles.img} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.tab}>
        <Image source={DiscoverIcon} resizeMode="contain" style={styles.img} />
        <Text style={styles.tabText}>Discover</Text>
      </TouchableOpacity>
      <View style={styles.tab}>
        <TouchableOpacity onPress={() => {}} style={styles.mainTab} activeOpacity={0.4}>
          <Feather name="plus" size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.tab}>
        <Image source={InboxIcon} resizeMode="contain" style={styles.img} />
        <Text style={styles.tabText}>Indox</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.tab}>
        <Image source={ProfileIcon} resizeMode="contain" style={styles.img} />
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabbar: { flex: 1, flexDirection: 'row' },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTab: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  tabText: {
    fontSize: 9,
    color: '#fff',
  },
  img: {
    height: 32,
    width: 32,
  },
});
