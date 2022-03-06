import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  const title = screen.getByText(/movie awards 2021/i);
  expect(title).toBeInTheDocument();
});
