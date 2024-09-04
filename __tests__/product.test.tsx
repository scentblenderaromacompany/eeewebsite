import { render, screen } from '@testing-library/react';
import ProductPage from '../pages/products/[slug]';

describe('ProductPage', () => {
  it('renders the product page correctly', () => {
    const product = { name: 'Test Product', description: 'This is a test product.' };
    render(<ProductPage product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product.')).toBeInTheDocument();
  });
});
