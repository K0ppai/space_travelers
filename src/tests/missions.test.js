import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/missions/missions';
import '@testing-library/jest-dom';

describe('Missions component', () => {
  test('render table headers', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const tableHEaders = document.querySelectorAll('th');
    expect(tableHEaders[0].textContent).toBe('Missions');
    expect(tableHEaders[1].textContent).toBe('Description');
    expect(tableHEaders[2].textContent).toBe('Status');
    expect(tableHEaders[3].textContent).toBe(' ');
  });
});
