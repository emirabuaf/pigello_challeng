import constants from "./constants";

const INITIAL_STATE = {
  solarList: [],
  error: false,
  selectedCategory: ""

};

const storeExampleReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.FETCH_SOLAR_DATA:
      return {
        ...state, solarList: payload.data.bodies
      }
    case constants.SHOW_ERROR:
      return {
        error: true
      }
    case constants.SELECT_CATEGORY:
      return {
        ...state, selectedCategory: payload.value
      }
    default:
      return state;
  }
};

export default storeExampleReducer;