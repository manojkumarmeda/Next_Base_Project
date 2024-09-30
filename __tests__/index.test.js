import Home from '@/pages/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />); //Arrange

    const heading = screen.getByText('Hello, World'); //Act
    expect(heading).toBeInTheDocument(); //Assert
  });
});
