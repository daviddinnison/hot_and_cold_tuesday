// import {NEW_GUESS} from './actions';

const initialState = {
  guesses: [],
  guessCount: 0,
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

// reducer function
export default (state = initialState, action) => {
  if (action.type === action.NEW_GUESS) {
    console.log('guess added');
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      guessCount: state.guesses.length, 
      feedback: action.feedback
    })
  }


  else if (action.type === action.CORRECT_ANSWER) {
    console.log('correct_answer triggered');
     return Object.assign ({}, state, { 
       correctAnswer: state.correctAnswer
     })
  }

  else if (action.type === action.RESET_STATE) {
    return Object.assign({}, initialState, {
      guesses: state.guesses,
      feedback: action.feedback,
      correctAnswer: state.correctAnswer
    })
  }  

return state;
};