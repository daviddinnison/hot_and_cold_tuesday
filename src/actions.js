
export const NEW_GUESS = 'NEW_GUESS';
export const newGuess = (guess, feedback) => {
  console.log('new guess action triggered')
  type: NEW_GUESS,
  guess,
  feedback
};

export const TOGGLE_WHAT = 'TOGGLE_WHAT';
export const toggleWhat = () => {
  type: TOGGLE_WHAT
};

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnswer = () => {
  type: CORRECT_ANSWER
};

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => {
  type: RESET_STATE
};


