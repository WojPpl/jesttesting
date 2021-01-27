import { render, screen } from '@testing-library/react';
import App from './App';

test('renders info test', () => {
  render(<App />);
  const infoElement = screen.getByText(/Komponenty korzystające z testowanych helperów/i);
  expect(infoElement).toBeInTheDocument();
});
