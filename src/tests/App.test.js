import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';

test('It should Should display the header', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const headerText = screen.getByText(/COVID-19 CASE STATISTICS/i);
  expect(headerText).toEqual(headerText);
});
