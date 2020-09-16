import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface IProps {
  numOfComments: number;
  onCommentPress(): void;
}

const Sidebar: React.FC<IProps> = ({ onCommentPress, numOfComments }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.sideBarItem}>
      <Image resizeMode="contain" source={require('../assets/icons/like.png')} style={styles.img} />
      <Text style={styles.text}>120</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={onCommentPress} style={styles.sideBarItem}>
      <Image
        resizeMode="contain"
        source={require('../assets/icons/comment.png')}
        style={styles.img}
      />
      <Text style={styles.text}>{numOfComments}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.sideBarItem}>
      <Image
        resizeMode="contain"
        source={require('../assets/icons/share.png')}
        style={styles.img}
      />
      <Text style={styles.text}>Share</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  sideBarItem: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  img: {
    height: 30,
    width: 30,
  },
  text: {
    color: '#fff',
  },
});

export default Sidebar;
