import { render, screen } from '@testing-library/react';
import '@testing-library/jsdom';
import App from './App';

test('Should render the HandyPro website', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to HandyPro/i);
  expect(linkElement).toBeInTheDocument();
});
