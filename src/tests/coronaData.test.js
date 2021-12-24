import covidReducer, { addCountry } from '../redux/coronaData/coronaData';

test('it should return initialstate of the app', () => {
  expect(covidReducer(undefined, {})).toEqual({
    countries: [],
    totalConfirmed: 0,
  });
});

test('it should handle adding countries covid record to the store', () => {
  const previousState = {
    countries: [],
    totalConfirmed: 0,
  };

  const newState = covidReducer(
    previousState,
    addCountry({
      name: 'Cameroon',
      id: 'Cameroon',
      total_confirmed: 500,
    }),
  );
  expect(newState).toEqual({
    countries: [
      {
        name: 'Cameroon',
        id: 'Cameroon',
        total_confirmed: 500,
      },
    ],
    totalConfirmed: 0,
  });
});
