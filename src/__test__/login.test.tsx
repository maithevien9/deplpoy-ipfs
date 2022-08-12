import React from 'react';
import Login from '../components/login';

import { render } from '@testing-library/react';

it('Render login component correctly', () => {
  render(<Login username='Neiv ne' />);
});
