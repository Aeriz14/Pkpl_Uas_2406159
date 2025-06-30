import { render, screen } from '@testing-library/react';
import App from './App';

test('menampilkan judul Halo UAS PKPL!', () => {
  render(<App />);
  const titleElement = screen.getByText(/UAS PKPL!/i);
  expect(titleElement).toBeInTheDocument();
});

test('menampilkan placeholder NIM dan Nama', () => {
  render(<App />);
  expect(screen.getByText(/NIM:/i)).toBeInTheDocument();
  expect(screen.getByText(/Nama:/i)).toBeInTheDocument();
  expect(screen.getByText(/NIM_ANDA/i)).toBeInTheDocument();
  expect(screen.getByText(/Nama Lengkap Anda/i)).toBeInTheDocument();
});
