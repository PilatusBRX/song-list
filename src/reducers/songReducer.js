import uuid from 'uuid/v4';

const songReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [
        ...state,
        {
          title: action.song.title,
          singer: action.song.author,
          id: uuid()
        }
      ];

    case 'REMOVE_SONG':
      return state.filter(song => song.id !== action.id);
    // o "state" se refere aos songs
    default:
      return state;
  }
};

export default songReducer;
