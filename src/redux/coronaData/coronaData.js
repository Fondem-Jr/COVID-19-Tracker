export const FETCH_DATA = 'data/FETCH_DATA';
const ADD_COUNTRY = 'countries/ADD_REGION';
const SET_TOTAL = 'numbers/SET_TOTAL';

const initialState = { countries: [], totalConfirmed: 0 };

export const addCountry = (country) => ({
  type: ADD_COUNTRY,
  payload: country,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, countries: [...state.countries, action.payload] };
    case SET_TOTAL:
      return { ...state, totalConfirmed: action.payload };
    default:
      return state;
  }
};

export const countries = (state) => state.countries;
export const totalConfirmed = (state) => state.totalConfirmed;

export default covidReducer;
