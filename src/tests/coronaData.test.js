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
      name: 'Nigeria',
      id: 'Nig',
      total_confirmed: 100,
    }),
  );
  expect(newState).toEqual({
    countries: [
      {
        name: 'Nigeria',
        id: 'Nig',
        total_confirmed: 100,
      },
    ],
    totalConfirmed: 0,
  });
});
