const initialState = {
  text: '',
  sentenceHistory: [],
  inputValue1: '',
  inputValue2: '',
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      const newText = action.payload.trim(); // Trim leading/trailing spaces
      if (newText === '') {
        return state; // Avoid adding empty strings to the sentence history
      }
      const newSentenceHistory = [newText, ...state.sentenceHistory].slice(0, 10); // Keep up to 10 sentences, newest first
      return { ...state, text: newText, sentenceHistory: newSentenceHistory };
    case 'UPDATE_INPUT_1':
      return { ...state, inputValue1: action.payload };
    case 'UPDATE_INPUT_2':
      return { ...state, inputValue2: action.payload };
    case 'ADD_VALUES':
      const concatenatedText = state.inputValue1 + ' ' + state.inputValue2;
      return { ...state, inputValue1: '', inputValue2: '', text: concatenatedText };
    case 'CLEAR_HISTORY':
      return { ...state, sentenceHistory: [] };
    default:
      return state;
  }
};

export default textReducer;