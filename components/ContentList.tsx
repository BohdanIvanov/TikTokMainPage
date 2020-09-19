import React, { useCallback, useRef, useState, useMemo } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
} from 'react-native';
import VideoPlayer from './VideoPlayer';
import SideBar from './SideBar';
import CommentsHeader from './CommentsHeader';

type Video = {
  id: string,
  video: any,
  poster: any,
};

type Comment = {
  id: string,
  name: string,
  message: string,
};

interface IProps {
  data: Video[];
}

interface ListItem {
  item: Video;
  index: number;
}

const ContentList: React.FC<IProps> = ({ data }) => {
  const [selectedVideo, setSelectedVideo] = useState<number>();
  const [commentsList, setCommentsList] = useState([]);

  const viewConfigRef = useRef({
    minimumViewTime: 100,
    itemVisiblePercentThreshold: 90,
  });

  const windowPosition = useMemo(() => new Animated.Value(Dimensions.get('window').height), []);

  const showConfig = {
    duration: 200,
    toValue: 0,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  };
  const hideConfig = {
    duration: 200,
    toValue: Dimensions.get('window').height,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  };
  const animationShow = Animated.timing(windowPosition, showConfig);
  const animationHide = Animated.timing(windowPosition, hideConfig);

  const renderListItem = ({ item, index }: ListItem) => (
    <View style={styles.listItem}>
      <VideoPlayer video={item.video} poster={item.poster} isVisible={selectedVideo === index} />
      <View style={styles.sideBarSection}>
        <SideBar
          numOfComments={commentsList.length}
          onCommentPress={() =>
            animationShow.start(({ finished }) => {
              if (finished) {
                windowPosition.setValue(0);
              }
            })
          }
        />
      </View>
    </View>
  );

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if ((!viewableItems.length && !selectedVideo) || viewableItems[0].index === selectedVideo)
      return;
    setSelectedVideo(() => viewableItems[0].index);
    setCommentsList(() => viewableItems[0].item.comments);
  }, []);

  const onCommentsHide = () => {
    animationHide.start(({ finished }) => {
      if (finished) {
        windowPosition.setValue(Dimensions.get('window').height);
      }
    });
  };

  const listKeyExtractor = useCallback((item) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.listContent}
        renderItem={renderListItem}
        keyExtractor={listKeyExtractor}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        removeClippedSubviews
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        showsVerticalScrollIndicator={false}
        extraData={selectedVideo}
        pagingEnabled
      />
      <Animated.View
        style={[styles.animatedContainer, { transform: [{ translateY: windowPosition }] }]}
      >
        <TouchableWithoutFeedback onPress={onCommentsHide}>
          <View style={styles.containerBg} />
        </TouchableWithoutFeedback>
        <View style={styles.commentsWindow}>
          <CommentsHeader onWindowHide={onCommentsHide} amountOfComments={commentsList.length} />
          <ScrollView contentContainerStyle={styles.commentsContent}>
            {commentsList.map((comment: Comment) => (
              <View key={comment.id} style={styles.comment}>
                <Text>{`${comment.name}: ${comment.message}`}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  listContent: {
    flexGrow: 1,
  },
  listItem: {
    height: Math.round(Dimensions.get('window').height * 0.9),
    justifyContent: 'center',
  },
  sideBarSection: {
    position: 'absolute',
    right: 10,
  },
  containerBg: { flex: 0.4 },
  commentsWindow: {
    flex: 0.6,
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  commentsContent: { flexGrow: 1 },
  comment: { padding: 10 },
  animatedContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
});

export default ContentList;
