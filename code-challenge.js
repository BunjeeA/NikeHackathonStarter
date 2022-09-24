/* eslint-disable no-unused-vars */
const { SPANISH_DICTIONARY, SHOE_LIST } = require('./constants.js');

const newSneakers = (sneakers) => {
  function newSneakers(name) {
    console.log("New sneakers " + name + " dropping soon!");
  }
};

const isThatMichaelJordan = (name) => {
  function isThatMichaelJordan(MichaelJordan) {

    //if ( "MICHAEL JORDAN" == MichaelJordan.toUpperCase() ){
    return "MICHAEL JORDAN" == MichaelJordan.toUpperCase()

  }
};

const areYouM = (name) => {
  function areYouM(M) {
    if (M.charAt(0) == "M") {
      return true;
    }
    return false;
  }
  console.log(areYouM("Micheal Jordan"));
  console.log(areYouM("Picheal Fordan"));
};

const mostViewsThreeSneakers = (sneakerOneViews, sneakerTwoViews, sneakerThreeViews) => {
  // insert code
};

const mostViews = (sneakerViews) => {
  // insert code
};

const validateEmail = (email) => {
  // insert code
};

const validateEmailWithError = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
};

const howRepetitiveAreYou = (str, word) => {
  // insert code
};

const spanishToEnglish = (spanish) => {
  const dictionary = SPANISH_DICTIONARY;
  // insert code
};

const getNames = (shoeList = SHOE_LIST) => {
  // insert code
};

const getUniqueSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

const getMostViewedSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

module.exports = {
  newSneakers,
  isThatMichaelJordan,
  areYouM,
  mostViewsThreeSneakers,
  mostViews,
  validateEmail,
  validateEmailWithError,
  getInitials,
  howRepetitiveAreYou,
  spanishToEnglish,
  getNames,
  getUniqueSneakers,
  getMostViewedSneakers,
};
