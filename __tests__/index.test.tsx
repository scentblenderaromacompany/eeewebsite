import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

describe('HomePage', () => {
  it('renders the homepage correctly', () => {
    render(<HomePage products={[]} />);
    expect(screen.getByText('Featured Products')).toBeInTheDocument();
  });
});
