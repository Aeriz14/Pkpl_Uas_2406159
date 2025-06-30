// src/App.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Pastikan ini ada di sini atau di setupTests.js

import App from './App';

test('renders Halo UAS PKPL! text', () => {
  render(<App />);
  const titleElement = screen.getByText(/Halo UAS PKPL!/i);
  expect(titleElement).toBeInTheDocument();
});

test('menampilkan NIM dan Nama yang benar', () => { // Ganti nama tes agar lebih jelas
  render(<App />);

  // Ganti dengan NIM dan Nama Anda yang sebenarnya
  const nim = "2406159"; // Masukkan NIM Anda yang sebenarnya
  const nama = "Muhamad Aenun Rizky"; // Masukkan Nama Anda yang sebenarnya

  // Cari elemen yang berisi NIM dan Nama Anda
  // Gunakan regex yang lebih fleksibel atau getByText dengan teks lengkap
  expect(screen.getByText(nim)).toBeInTheDocument();
  expect(screen.getByText(nama)).toBeInTheDocument();

  // Anda juga bisa mencari elemen yang berisi kombinasi teks "NIM: [NIM Anda]"
  // expect(screen.getByText(/NIM: 2406159/i)).toBeInTheDocument();
  // expect(screen.getByText(/Nama: Muhamad Aenun Rizky/i)).toBeInTheDocument();
});