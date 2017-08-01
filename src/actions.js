
const NEW_GUESS = 'NEW_GUESS';
const newGuess = (guess, feedback) => {
  type: NEW_GUESS,
  guess,
  feedback
};

const TOGGLE_WHAT = 'TOGGLE_WHAT';
const toggleWhat = () => {
  type: TOGGLE_WHAT
};

const CORRECT_ANSWER = 'CORRECT_ANSWER';
const correctAnswer = () => {
  type: CORRECT_ANSWER
};

const RESET_STATE = 'RESET_STATE';
const resetState = () => {
  type: RESET_STATE
};


