import * as actions from '.actions';

const initialState = {
  guesses: [],
  guessCount: 0,
  correctAnswer: null,
  feedback: 'Make your guess!'
};

export const reducer = (state = initialState, action) => {
  if (action.type === action.NEW_GUESS) {
    console.log('guess added');
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      guessCount: state.guesses.length, 
      feedback: action.feedback
    })
  }

  if (action.type === action.CORRECT_ANSWER) {
     return state.correctAnswer: Math.floor(Math.random() * 100) + 1
  }

  if (action.type === action.RESET_STATE) {
    return Object.assign({}, state, initialState)
  }  


};