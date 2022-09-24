/* eslint-disable no-unused-vars */
const { SPANISH_DICTIONARY, SHOE_LIST } = require('./constants.js');

const newSneakers = (sneakers) => {
  return "New sneakers " + sneakers + " dropping soon!";
};

const isThatMichaelJordan = (name) => {
  return "MICHAEL JORDAN" == name.toUpperCase()

};

const areYouM = (name) => {
  if (name.charAt(0) == "M") {
    return true;
  }
  return false;
};

const mostViewsThreeSneakers = (sneakerOneViews, sneakerTwoViews, sneakerThreeViews) => {

  if (sneakerOneViews > sneakerTwoViews && sneakerOneViews > sneakerThreeViews) {
    return sneakerOneViews;
  }
  else if (sneakerTwoViews > sneakerOneViews & sneakerTwoViews > sneakerThreeViews) {
    return sneakerTwoViews;
  }
  else {
    return sneakerThreeViews;
  }
};

const mostViews = (sneakerViews) => {
  let max = 0
  for (let i = 0; i < sneakerViews.length; i++) {
    if (sneakerViews[i] > max) {
      max = sneakerViews[i]
    }
  }
  return max
};

const validateEmail = (email) => {
    if (email.includes("@")){
      if(email.indexOf("@") !== 0){
        if((email.substring(email.length - 4) === ".com") || (email.substring(email.length - 4) === ".edu") || (email.substring(email.length - 4) === ".net") || (email.substring(email.length - 4) === ".org")){
          return "Valid email"
        }
        
      }
      
    }
    return "Invalid email"
};

const validateEmailWithError = (email) => {
  
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
