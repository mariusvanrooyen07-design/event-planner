import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Help from './Help.jsx';

describe('Help', () => {
  test('matches the snapshot', () => {
    const { asFragment } = render(<Help />);
    expect(asFragment()).toMatchSnapshot();
  });
});