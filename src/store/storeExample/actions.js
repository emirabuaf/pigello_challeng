import constants from "./constants";

export function fetchSolarData() {
  return (dispatch) => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: constants.FETCH_SOLAR_DATA, payload: { data } })
      })
      .catch(error => {
        dispatch({ type: constants.SHOW_ERROR, payload: error })
      })

  };
}

export function selectCategory(value) {
  return {
    type: constants.SELECT_CATEGORY,
    payload: { value }
  }
}