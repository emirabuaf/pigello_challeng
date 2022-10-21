import constants from "./constants";

const INITIAL_STATE = {
  solarList: [],
  error: false,
};

const storeExampleReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.FETCH_SOLAR_DATA:
      return {
        ...state, solarList: payload.data
      }
    case constants.SHOW_ERROR:
      return {
        error: true
      }
    default:
      return state;
  }
};

export default storeExampleReducer;