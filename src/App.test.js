// src/App.test.js
    import { render, screen } from '@testing-library/react';
    import '@testing-library/jest-dom'; // Pastikan ini ada di sini atau di setupTests.js

    import App from './App';

    test('renders Halo UAS PKPL! text', () => {
      render(<App />);
      const titleElement = screen.getByText(/Halo UAS PKPL!/i);
      expect(titleElement).toBeInTheDocument();
    });

    test('menampilkan NIM dan Nama asli', () => {
      render(<App />);
      expect(screen.getByText(/NIM:/i)).toBeInTheDocument();
      expect(screen.getByText(/Nama:/i)).toBeInTheDocument();
      expect(screen.getByText(/2406159/i)).toBeInTheDocument();
      expect(screen.getByText(/Muhamad Aenun Rizky/i)).toBeInTheDocument();
    });
