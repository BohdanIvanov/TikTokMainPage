const data = [
  {
    id: '1',
    video: require('../assets/videos/02.mp4'),
    poster: require('../assets/poster/02.jpg'),
    comments: [
      { id: '1', name: 'Brian', message: 'Haha' },
      { id: '2', name: 'Mel', message: 'Looks funny!' },
      { id: '3', name: 'Tommy', message: 'I really like this video' },
    ],
  },
  {
    id: '2',
    video: require('../assets/videos/01.mp4'),
    poster: require('../assets/poster/01.jpg'),
    comments: [
      { id: '1', name: 'Mark', message: 'Funny :)' },
      { id: '2', name: 'Helen', message: 'Thanks' },
    ],
  },
  {
    id: '3',
    video: require('../assets/videos/03.mp4'),
    poster: require('../assets/poster/03.jpg'),
    comments: [
      { id: '1', name: 'Arthur', message: 'Cool!' },
      { id: '2', name: 'Helen', message: 'Really nice!' },
    ],
  },
];

export default data;
