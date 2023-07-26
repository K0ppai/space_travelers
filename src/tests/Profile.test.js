import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../pages/Profile';
import store from '../redux/configureStore';

describe('Testing Profile page', () => {
  it('Should render myProfile page', () => {
    const rocketsPage = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });
});
