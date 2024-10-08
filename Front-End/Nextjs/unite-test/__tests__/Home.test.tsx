import { render, screen } from '@testing-library/react';
// jest.setup.ts or jest.setup.js
import '@testing-library/jest-dom';

import Home from '@/app/page';
describe('Home', () => {
  it('should have Welcome text', () => {
    render(<Home />); // ARRANGE
    const element = screen.getByText(/Welcome/i); //Act
    expect(element).toBeInTheDocument(); //ASSERT
  });
  it('should contain the word simple', () => {
      render(<Home />); // ARRANGE
      // /i mean dosent matter if it lowercase or not
    const element = screen.getByText(/simple/i); //Act
    expect(element).toBeInTheDocument(); //ASSERT
  });
  it('should have a heading', () => {
    render(<Home />); // ARRANGE
    // /i mean dosent matter if it lowercase or not
      const element = screen.getAllByRole('heading'); //Act
  expect(element.length).toBeGreaterThan(0); //ASSERT
});
});
