import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface IProps {
  amountOfComments: number;
  onWindowHide(): void;
}

const CommentsHeader: React.FC<IProps> = ({ amountOfComments, onWindowHide }) => (
  <View style={styles.commentsHeader}>
    <View>
      <Text>Comments: {amountOfComments}</Text>
    </View>
    <TouchableOpacity onPress={onWindowHide} style={styles.closeButton}>
      <AntDesign name="close" size={15} />
    </TouchableOpacity>
  </View>
);

export default CommentsHeader;

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  commentsHeader: {
    flex: 0.1,
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
