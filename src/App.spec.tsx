import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

test('sum', () => {
    const {getByText} = render(<App/>);

    expect(getByText("Hello, world!")).toBeInTheDocument();
  }
);

